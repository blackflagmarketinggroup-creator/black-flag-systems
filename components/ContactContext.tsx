"use client";

import { createContext, useContext, useState } from "react";
import ContactModal from "@/components/ContactModal";

type OpenContact = (tier?: string) => void;

const ContactCtx = createContext<OpenContact>(() => {});

export function useContact(): OpenContact {
  return useContext(ContactCtx);
}

// Provides a single shared ContactModal + openModal() to any descendant.
// Buttons anywhere in the tree call useContact()(optionalTierOrSystemName).
export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [tier, setTier] = useState("");

  const openModal: OpenContact = (t = "") => {
    setTier(t);
    setOpen(true);
  };

  return (
    <ContactCtx.Provider value={openModal}>
      <ContactModal
        isOpen={open}
        onClose={() => setOpen(false)}
        defaultTier={tier}
      />
      {children}
    </ContactCtx.Provider>
  );
}
