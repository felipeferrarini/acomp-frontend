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
  // loadingProcedure: boolean;
  // procedureModalIsOpen: boolean;
  // procedureForm: ProcedurePayload;
  fetchProcedures: (search?: string) => Promise<void>;
  // createPatient: (form: PatientPayload) => Promise<void>;
  toogleProcedureModal: (id?: string) => void;
}

const ProceduresContext = createContext({
  procedures: [],
} as ProceduresContextData);

const ProceduresProvider = ({ children }: WithChildren) => {
  const defaultProcedureForm = {
    id: '',
    type: '',
  };
  const [procedures, setProcedures] = useState<ProcedureProps[]>([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
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
    }
  };
  const toogleProcedureModal = (id?: string) => {
    if (id) {
      // setIsEditMode(true);
      // setPatientModalIsOpen(true);
      // getPatientInfo(id);
      return;
    }

    // setPatientModalIsOpen(!patientModalIsOpen);
  };

  useEffect(() => {
    fetchProcedures();
  }, []);

  return (
    <ProceduresContext.Provider
      value={{
        fetchProcedures,
        procedures,
        loading,
        toogleProcedureModal,
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
