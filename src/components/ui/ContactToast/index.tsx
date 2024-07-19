'use client';
import React, { useEffect, useState } from 'react';

const ContactToast = ({ submit }: { submit: boolean }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // When `submit` is true, show the toast
    if (submit) {
      setShowToast(true);
      const timer = setTimeout(() => {
        // Hide the toast after 3000ms (3 seconds)
        setShowToast(false);
      }, 4000);

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [submit]); // Effect depends on `submit`

  return (
    <>
      {showToast ? (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ContactToast;
