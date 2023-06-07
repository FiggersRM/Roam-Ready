module.exports = {
    format_date: (date) => {
        const newDate = new Date(date);
      return newDate.toLocaleDateString();
    }
  };