module.exports = () => {
  const data = {
    patients: [],
  };

  for (let i = 0; i < 50; i += 1) {
    data.patients.push({
      id: i + 1,
      name: `Paciente - ${i + 1}`,
      cpf: 99999999999,
      phone: 5527999999999,
      address: `Rua Jose da Silva Pinto, nº ${i + 1}`,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  return data;
};
