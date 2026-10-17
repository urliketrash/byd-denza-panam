# 📊 Panduan Integrasi Google Sheets CMS & CRM — BYD Arista Pekanbaru

Sistem ini memungkinkan **Sales Consultant (Kak Suci)** untuk:
1. **Mengubah Harga OTR, DP Promo, & Status Unit** langsung dari Google Sheets di HP/Laptop tanpa perlu koding.
2. **Menerima Rekap Otomatis Data Calon Konsumen (Leads)** yang mengisi formulir *Test Drive* atau *Simulasi Kredit* langsung masuk ke Google Sheets sebagai buku tamu digital sales.

---

## 🛠️ Langkah 1: Buat File Google Spreadsheet Baru

1. Buka [Google Sheets](https://sheets.new) di browser Anda.
2. Beri nama file: `BYD Arista Pekanbaru - CMS & Leads`.
3. Buat **2 Sheet (Tab)** di bagian bawah:
   * Tab 1 ganti nama menjadi: **`Katalog_Harga`**
   * Tab 2 ganti nama menjadi: **`Database_Leads`**

---

### Struktur Kolom Tab 1: `Katalog_Harga`
Isi baris pertama (Header / Baris 1) dengan judul kolom berikut:

| A | B | C | D | E | F | G | H |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **variant_id** | **model_name** | **variant_name** | **price_idr** | **dp_promo_idr** | **cicilan_idr** | **status** | **catatan_promo** |
| `denza-d9-flagship` | DANZA D9 | Flagship | `1008000000` | `200000000` | `18500000` | `AVAILABLE` | Garansi Baterai 8 Tahun |
| `m6-standard-7s` | BYD M6 | Standard (7-Seater) | `389000000` | `40000000` | `6900000` | `AVAILABLE` | Unit Ready Stock |
| `m6-superior-7s` | BYD M6 | Superior (7-Seater) | `429000000` | `45000000` | `7500000` | `AVAILABLE` | Bunga 0% s.d 2 Tahun |
| `m6-superior-captain-6s` | BYD M6 | Superior Captain (6-Seater) | `439000000` | `48000000` | `7800000` | `AVAILABLE` | Favorit Keluarga |
| `seal-premium` | BYD SEAL | Premium | `639000000` | `75000000` | `11200000` | `AVAILABLE` | Free Wallbox Charger |
| `seal-performance-awd` | BYD SEAL | Performance AWD | `729000000` | `85000000` | `12900000` | `AVAILABLE` | 0-100 km/h dalam 3.8s |
| `atto3-advanced` | BYD ATTO 3 | Advanced | `405000000` | `40000000` | `7100000` | `AVAILABLE` | Ready Test Drive |
| `atto3-superior` | BYD ATTO 3 | Superior | `525000000` | `55000000` | `9200000` | `AVAILABLE` | Panoramic Sunroof |
| `dolphin-dynamic` | BYD DOLPHIN | Dynamic | `375000000` | `35000000` | `6500000` | `AVAILABLE` | City Hatchback Lincah |
| `dolphin-premium` | BYD DOLPHIN | Premium | `435000000` | `45000000` | `7600000` | `AVAILABLE` | Range hingga 490 km |
| `atto1-dynamic` | BYD ATTO 1 | Dynamic Std | `233000000` | `25000000` | `4100000` | `AVAILABLE` | Mobil Listrik Paling Terjangkau |
| `atto1-premium` | BYD ATTO 1 | Premium | `266000000` | `28000000` | `4700000` | `AVAILABLE` | Varian Tertinggi ATTO 1 |

---

### Struktur Kolom Tab 2: `Database_Leads`
Isi baris pertama (Header / Baris 1) dengan judul kolom berikut:

| A | B | C | D | E | F | G | H |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Waktu Masuk** | **Nama Calon Konsumen** | **Nomor WhatsApp** | **Unit Pilihan** | **Varian** | **Jenis Layanan** | **Tanggal Rencana** | **Catatan / Info Tambahan** |

*(Baris ke-2 dan seterusnya akan terisi secara otomatis setiap kali ada calon konsumen yang mengisi formulir website!)*

---

## 💻 Langkah 2: Pasang Google Apps Script

1. Di Google Sheets, klik menu **Ekstensi** > **Apps Script**.
2. Hapus semua kode bawaan di `Code.gs`, lalu tempelkan kode berikut:

```javascript
// =====================================================================
// APPS SCRIPT WEB APP — BYD ARISTA PEKANBARU CMS & CRM
// =====================================================================

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Katalog_Harga");
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Sheet 'Katalog_Harga' tidak ditemukan"
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = [];
    
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      if (!row[0]) continue;
      
      rows.push({
        variantId: String(row[0]).trim(),
        modelName: row[1] || "",
        variantName: row[2] || "",
        priceIdr: row[3] ? Number(row[3]) : null,
        dpPromoIdr: row[4] ? Number(row[4]) : null,
        cicilanPerBulanIdr: row[5] ? Number(row[5]) : null,
        status: String(row[6] || "AVAILABLE").trim(),
        promoNote: row[7] || ""
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      total: rows.length,
      data: rows
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Database_Leads");
    
    if (!sheet) {
      sheet = ss.insertSheet("Database_Leads");
      sheet.appendRow([
        "Waktu Masuk", "Nama Calon Konsumen", "Nomor WhatsApp", 
        "Unit Pilihan", "Varian", "Jenis Layanan", 
        "Tanggal Rencana", "Catatan / Info Tambahan"
      ]);
    }
    
    var body = {};
    if (e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }
    
    var now = new Date();
    var formattedDate = Utilities.formatDate(now, "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
    
    sheet.appendRow([
      formattedDate,
      body.nama || "-",
      body.phone || "-",
      body.unit || "-",
      body.variant || "-",
      body.serviceType || "Konsultasi",
      body.plannedDate || "-",
      body.notes || (body.source ? "Sumber: " + body.source : "-")
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead berhasil dicatat ke Database_Leads"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Klik tombol **Simpan (Save)** (ikon disket).

---

## 🚀 Langkah 3: Deploy Script sebagai Web App

1. Di pojok kanan atas Google Apps Script, klik tombol biru **Terapkan (Deploy)** > **Deployment Baru (New deployment)**.
2. Klik ikon gerigi (Select type) > pilih **Aplikasi Web (Web App)**.
3. Konfigurasi:
   * **Deskripsi:** `BYD Arista Webhook v1`
   * **Jalankan sebagai (Execute as):** `Saya (alamat email Google Anda)`
   * **Yang memiliki akses (Who has access):** `Siapa saja (Anyone)` *(Sangat penting agar website bisa mengirim data)*.
4. Klik tombol **Terapkan (Deploy)**.
5. Berikan izin otorisasi jika diminta oleh Google.
6. Salin **URL Aplikasi Web (Web App URL)** yang berformat:
   `https://script.google.com/macros/s/AKfycb.../exec`

---

## 🔗 Langkah 4: Hubungkan ke Website

1. Buat file `.env.local` di folder proyek `byd-denza-panam`.
2. Masukkan URL yang Anda salin tadi:

```env
NEXT_PUBLIC_SHEETS_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
```

3. Selesai! Sekarang:
   * Setiap ada calon pembeli yang klik reservasi, datanya otomatis tersimpan di baris baru Google Sheets.
   * Kak Suci bisa membuka Google Sheets langsung dari HP kapan pun ia mau!
