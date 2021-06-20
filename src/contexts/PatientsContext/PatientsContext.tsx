import { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { WithChildren } from '../../@types/withChildren';
import { PatientPayload, PatientProps } from '../../services/patient/types';
import { patientServices } from '../../services/patient/patient.services';
import { PatientsContextData } from './types';
import { stringParsers } from '../../utils/parse/string';

const PatientsContext = createContext({} as PatientsContextData);

const PatientsProvider = ({ children }: WithChildren) => {
  const defaultPatientForm = {
    id: '',
    name: '',
    cpf: '',
    phone: '',
    address: '',
    birth_date: '',
  };

  const [patients, setPatients] = useState<PatientProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingPatient, setLoadingPatient] = useState(false);
  const [patientModalIsOpen, setPatientModalIsOpen] = useState(false);
  const [patientForm, setPatientForm] =
    useState<PatientPayload>(defaultPatientForm);
  const [isEditMode, setIsEditMode] = useState(false);

  const toast = useToast();

  const fecthPatientsData = async (search = '') => {
    setLoading(true);
    try {
      const data = await patientServices.getAll(search);

      if (data) {
        setPatients(data);
      }
    } catch (err) {
      toast({
        title: 'Erro na requisição',
        description: 'Não foi possivel listar os pacientes!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createPatient = async (form: PatientPayload) => {
    setLoading(true);
    try {
      const data = isEditMode
        ? await patientServices.update(form)
        : await patientServices.create(form);
      if (data) {
        fecthPatientsData();
        setPatientModalIsOpen(false);
        toast({
          title: 'Sucesso!',
          description: isEditMode
            ? 'O paciente foi atualizado com sucesso'
            : 'O paciente foi cadastrado com sucesso',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: 'Erro ao criar paciente',
        description:
          'Não foi possivel criar o paciente, verifique se ele já não está cadastrado!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getPatientInfo = async (id: string) => {
    setLoadingPatient(true);
    try {
      const data = await patientServices.getOne(id);
      if (data)
        setPatientForm({
          id: data.id,
          name: data.name,
          birth_date: stringParsers.toDefaultDate(data.birth_date),
          cpf: data.cpf,
          phone: data.phone,
          address: data.address,
        });
    } catch (err) {
      toast({
        title: 'Erro ao criar paciente',
        description:
          'Não foi possivel criar o paciente, verifique se ele já não está cadastrado!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(err);
    } finally {
      setLoadingPatient(false);
    }
  };

  const tooglePatientModal = (id?: string) => {
    if (id) {
      setIsEditMode(true);
      setPatientModalIsOpen(true);
      getPatientInfo(id);
      return;
    }

    setPatientModalIsOpen(!patientModalIsOpen);
  };

  useEffect(() => {
    fecthPatientsData();
  }, []);

  return (
    <PatientsContext.Provider
      value={{
        patients,
        loading,
        loadingPatient,
        patientModalIsOpen,
        patientForm,
        fecthPatientsData,
        createPatient,
        tooglePatientModal,
      }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

const usePatientsContext = () => {
  const context = useContext(PatientsContext);

  if (!context) throw new Error('The patients context must be provider!');

  return context;
};

export { usePatientsContext, PatientsProvider };
