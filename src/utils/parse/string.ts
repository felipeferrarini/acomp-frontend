const addLeftZero = (number: number) => number.toString().padStart(2, '0');

export const stringParsers = {
  toShortDate: (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  },
  toHours: (date: string) => {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    return `${addLeftZero(hours)}:${addLeftZero(minutes)}`;
  },
  toDefaultDate: (date: string) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const mouth = newDate.getMonth();
    const day = newDate.getDate();

    return `${year}-${addLeftZero(mouth)}-${addLeftZero(day)}`;
  },
};
