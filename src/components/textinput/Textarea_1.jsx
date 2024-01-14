'use client';
export default function Textarea_1({ className, children }) {
  return (
    <>
      <div className={`${className} Textarea_1`}>
        <textarea
          placeholder="placeholder"
          defaultValue={children}
        ></textarea>
      </div>
    </>
  );
}
