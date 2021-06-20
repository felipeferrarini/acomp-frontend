import { useToast } from '@chakra-ui/react';
import { useContext, useEffect, useState, createContext } from 'react';
import { WithChildren } from '../../@types/withChildren';
import { DoctorPayload, DoctorProps } from '../../services/doctors/types';
import { doctorServices } from '../../services/doctors/doctors.services';

export interface ProceduresContextData {
  doctors: DoctorProps[];
  loading: boolean;
  form: DoctorPayload;
  modalIsOpen: boolean;
  loadingDoctor: boolean;
  fetchDoctors: (search?: string) => Promise<void>;
  toogleProcedureModal: (id?: string) => void;
  createProcedure: (payload: DoctorPayload) => Promise<void>;
}

const DoctorsContext = createContext({} as ProceduresContextData);

const DoctorsProvider = ({ children }: WithChildren) => {
  const toast = useToast();
  const defaultDoctorForm = {
    id: '',
    name: '',
    crm: '',
    phone: '',
    user_id: '',
  };
  const [doctors, setDoctors] = useState<DoctorProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<DoctorPayload>(defaultDoctorForm);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loadingDoctor, setLoadingDoctor] = useState(false);

  const fetchDoctors = async (search = '') => {
    setLoading(true);
    try {
      const data = await doctorServices.getAll(search);

      if (data) {
        setDoctors(data);
      }
    } catch (error) {
      toast({
        title: 'Erro na requisição',
        description: 'Não foi possivel listar Médicos!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getDoctorInfo = async (id: string) => {
    setLoadingDoctor(true);
    try {
      const data = await doctorServices.getOne(id);
      if (data)
        setForm({
          id: data.id,
          crm: data.crm,
          name: data.name,
          phone: data.phone,
          user_id: data.user_id,
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
      setLoadingDoctor(false);
    }
  };

  const createProcedure = async (payload: DoctorPayload) => {
    setLoading(true);
    try {
      const data = isEditMode
        ? await doctorServices.update(payload)
        : await doctorServices.create(payload);
      if (data) {
        fetchDoctors();
        setModalIsOpen(false);
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

  const toogleProcedureModal = (id?: string) => {
    if (id) {
      setModalIsOpen(true);
      setIsEditMode(true);
      getDoctorInfo(id);
      return;
    }

    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <DoctorsContext.Provider
      value={{
        fetchDoctors,
        toogleProcedureModal,
        createProcedure,
        doctors,
        loading,
        form,
        modalIsOpen,
        loadingDoctor,
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};

const useDoctorsContext = () => {
  const context = useContext(DoctorsContext);
  if (!context) throw new Error('erro context no provided');
  return context;
};

export { useDoctorsContext, DoctorsProvider };
