document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua wrapper dropdown
    const dropdownsWrapper = document.querySelectorAll("._select-wrapper");
  
    dropdownsWrapper.forEach((wrapper) => {
      const dropdownInput = wrapper.querySelector("input"); 
      const dropdownList = wrapper.querySelector(".dropdown-list"); 
      const items = Array.from(dropdownList.querySelectorAll("li")); 
  
      dropdownInput.addEventListener("input", (event) => {
        const filter = event.target.value.toLowerCase();
        if (filter !== '') {
            dropdownList.innerHTML = '';
        }

        const filteredItems = items.filter((item) =>
          item.textContent.toLowerCase().startsWith(filter)
        );
  
        if (filteredItems.length > 0) {
          filteredItems.forEach((item) => dropdownList.appendChild(item));
          dropdownList.style.display = "block"; 
        } else {
          dropdownList.style.display = "none"; 
        }
      });
  
      // Sembunyikan dropdown saat klik di luar
      document.addEventListener("click", (event) => {
        if (!wrapper.contains(event.target)) {
          dropdownList.style.display = "none"; // Sembunyikan dropdown
        }
      });
  
      // Klik pada item dropdown untuk memilih
      dropdownList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
          dropdownInput.value = event.target.textContent; // Set nilai input ke teks item yang diklik
          dropdownList.style.display = "none"; // Sembunyikan dropdown
        }
      });
  
      // Tampilkan dropdown saat input difokuskan
      dropdownInput.addEventListener("focus", () => {
        dropdownList.style.display = "block"; // Tampilkan dropdown
      });
    });
  });
  
