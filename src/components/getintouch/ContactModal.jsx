"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import UMForm from "@/components/form";

const ContactModal = ({ show, onClose }) => {
  return (
    <div>
      <Dialog open={show} onClose={() => {}} className="relative z-[100]">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-60 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-[10] w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="max-w-3xl bg-white rounded-[32px]"
            >
              <UMForm onClose={onClose} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ContactModal;
