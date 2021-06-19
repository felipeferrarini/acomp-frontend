export const stringParsers = {
  toShortDate: (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  },
  toHours: (date: string) => {
    const newDate = new Date(date);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    const addLeftZero = (number: number) => number.toString().padStart(2, '0');

    return `${addLeftZero(hours)}:${addLeftZero(minutes)}`;
  },
};
