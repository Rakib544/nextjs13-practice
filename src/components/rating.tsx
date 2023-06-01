export default function CustomRating({ value = 4.7 }: { value: number }) {
  const ratingsInArray = value.toFixed(1).split(".");
  const coloredIcons = Number(ratingsInArray[0]);
  const uncoloredIcons = 5 - Math.ceil(value);
  return (
    <div className="flex gap-1">
      {[...Array(coloredIcons)].map((_) => (
        <svg
          key={Math.random().toString()}
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,193,7,1)"
          ></path>
        </svg>
      ))}
      {Number(ratingsInArray[1]) === 0 ? null : (
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(255,193,7,1)"
          ></path>
        </svg>
      )}
      {[...Array(uncoloredIcons)].map((_) => (
        <svg
          key={Math.random().toString()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path
            d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
            fill="rgba(173,184,194,1)"
          ></path>
        </svg>
      ))}
    </div>
  );
}
