'use client';

import React, { useState } from 'react';
import { useAttribution } from '@/hooks/useAttribution';
import { Navbar } from '@/components/Navbar';
import { DenzaFlagshipHero } from '@/components/DenzaFlagshipHero';
import { BydCatalogSection } from '@/components/BydCatalogSection';
import { CreditSimulatorModal } from '@/components/CreditSimulatorModal';
import { TestDriveBookingSection } from '@/components/TestDriveBookingSection';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { VehicleModel, VehicleVariant } from '@/data/catalog';

export default function Home() {
  const attribution = useAttribution();

  // Credit Simulator State
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);
  const [selectedCreditModel, setSelectedCreditModel] = useState<VehicleModel | null>(null);
  const [selectedCreditVariant, setSelectedCreditVariant] = useState<VehicleVariant | null>(null);

  // Booking Section Prefill State
  const [prefilledBookingUnit, setPrefilledBookingUnit] = useState<string | undefined>(undefined);
  const [prefilledBookingVariant, setPrefilledBookingVariant] = useState<string | undefined>(undefined);

  const handleOpenCredit = (model: VehicleModel, variant?: VehicleVariant) => {
    setSelectedCreditModel(model);
    setSelectedCreditVariant(variant ?? model.variants[0]);
    setIsCreditModalOpen(true);
  };

  const handleOpenBooking = (unit?: string, variant?: string, color?: string) => {
    if (unit) setPrefilledBookingUnit(unit);
    if (variant) setPrefilledBookingVariant(variant);

    const bookingElement = document.getElementById('test-drive');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-slate-200 selection:text-slate-900">
      <JsonLd />

      {/* Top Glassmorphic Navigation Bar */}
      <Navbar
        attribution={attribution}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* FR-01: Denza Flagship Luxury Hero (Obsidian Dark Atmosphere) */}
        <DenzaFlagshipHero
          onOpenBooking={handleOpenBooking}
          onOpenCredit={(model) => handleOpenCredit(model)}
        />

        {/* FR-02: Interactive BYD Showroom Catalog (Clean Daylight Atmosphere) */}
        <BydCatalogSection
          onOpenCredit={handleOpenCredit}
          onOpenBooking={handleOpenBooking}
        />

        {/* FR-04: Smart Test Drive & Pemesanan Booking Section */}
        <TestDriveBookingSection
          attribution={attribution}
          prefilledUnit={prefilledBookingUnit}
          prefilledVariant={prefilledBookingVariant}
        />
      </main>

      {/* FR-03: Interactive Credit Simulator Modal */}
      <CreditSimulatorModal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
        initialModel={selectedCreditModel}
        initialVariant={selectedCreditVariant}
        attribution={attribution}
      />

      {/* FR-04: Sticky Mobile Conversion Bar (Bottom Screen for Mobile & In-App Browser) */}
      <StickyMobileBar
        attribution={attribution}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Official Arista Group Footer */}
      <Footer />
    </div>
  );
}
