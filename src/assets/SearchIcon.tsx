import { FC } from "react";

type SearchIconProps = {
  className: string;
};

const SearchIcon: FC<SearchIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="40"
      height="40"
    >
      <path d="M21 3C11.602 3 4 10.602 4 20s7.602 17 17 17c3.355 0 6.46-.984 9.094-2.656l12.281 12.281 4.25-4.25L34.5 30.281C36.68 27.421 38 23.88 38 20c0-9.398-7.602-17-17-17Zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S8 27.2 8 20 13.8 7 21 7Z" />
    </svg>
  );
};

export default SearchIcon;