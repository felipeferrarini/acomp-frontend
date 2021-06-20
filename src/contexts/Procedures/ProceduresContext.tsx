import { useToast } from '@chakra-ui/react';
import { useContext, useEffect, useState, createContext } from 'react';

import { WithChildren } from '../../@types/withChildren';
import { procedureService } from '../../services/procedures/procedures.services';
import {
  ProcedurePayload,
  ProcedureProps,
} from '../../services/procedures/types';

export interface ProceduresContextData {
  procedures: ProcedureProps[];
  loading: boolean;
  form: ProcedurePayload;
  modalIsOpen: boolean;
  loadingProcedure: boolean;
  fetchProcedures: (search?: string) => Promise<void>;
  toogleProcedureModal: (id?: string) => void;
  createProcedure: (payload: ProcedurePayload) => Promise<void>;
}

const ProceduresContext = createContext({
  procedures: [],
} as ProceduresContextData);

const ProceduresProvider = ({ children }: WithChildren) => {
  const toast = useToast();
  const defaultProcedureForm = {
    id: '',
    type: '',
    description: '',
  };
  const [procedures, setProcedures] = useState<ProcedureProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ProcedurePayload>(defaultProcedureForm);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loadingProcedure, setLoadingProcedure] = useState(false);

  const fetchProcedures = async (search = '') => {
    setLoading(true);
    try {
      const data = await procedureService.getAll(search);

      if (data) {
        setProcedures(data);
      } else setProcedures([]);
    } catch (error) {
      toast({
        title: 'Erro na requisição',
        description: 'Não foi possivel listar os Procedimentos!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProcedureInfo = async (id: string) => {
    setLoadingProcedure(true);
    try {
      const data = await procedureService.getOne(id);
      if (data)
        setForm({
          id: data.id,
          type: data.type,
          description: data.description || '',
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
      setLoadingProcedure(false);
    }
  };

  const createProcedure = async (payload: ProcedurePayload) => {
    setLoading(true);
    try {
      const data = isEditMode
        ? await procedureService.update(payload)
        : await procedureService.create(payload);
      if (data) {
        fetchProcedures();
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
      getProcedureInfo(id);
      return;
    }

    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    fetchProcedures();
  }, []);

  return (
    <ProceduresContext.Provider
      value={{
        fetchProcedures,
        toogleProcedureModal,
        createProcedure,
        procedures,
        loading,
        form,
        modalIsOpen,
        loadingProcedure,
      }}
    >
      {children}
    </ProceduresContext.Provider>
  );
};

const useProcedureContext = () => {
  const context = useContext(ProceduresContext);
  if (!context) throw new Error('erro context no provided');
  return context;
};

export { useProcedureContext, ProceduresProvider };
