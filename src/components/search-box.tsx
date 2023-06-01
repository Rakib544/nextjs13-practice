function SearchBox() {
  return (
    <div className="rounded-full border bg-white px-2 py-2 shadow-sm">
      <form className="grid grid-cols-12 items-center gap-2 ">
        <div className="col-span-8 md:col-span-9">
          <input
            type="text"
            className="w-full rounded-full border-0 py-4 pl-4 text-sm outline-none focus:ring-0 md:text-xs"
            placeholder="search courses, instructors and organizations.."
          />
        </div>
        <div className="col-span-4 md:col-span-3">
          <button className="w-full rounded-full bg-green-500 py-3 text-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
