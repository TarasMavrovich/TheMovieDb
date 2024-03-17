const PageNavigation = ({ currentPage, totalPages, onPageClick }) => {
  const generatePages = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= maxVisiblePages - 1) {
        pages.push(...Array.from({ length: maxVisiblePages }, (_, i) => i + 1));
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - maxVisiblePages + 2) {
        pages.push(1);
        pages.push("...");
        pages.push(
          ...Array.from(
            { length: maxVisiblePages },
            (_, i) => totalPages - maxVisiblePages + 1 + i
          )
        );
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div>
      {generatePages().map((page, index) => (
        <span
          key={index}
          style={{
            cursor: page === "..." ? "default" : "pointer",
            fontWeight: currentPage === page ? "bold" : "normal",
            color: currentPage === page ? "violet" : "white",
          }}
          onClick={() => onPageClick(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default PageNavigation;
