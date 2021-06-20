import { Grid } from '@chakra-ui/react';
import { FaCogs, FaFileAlt, FaUsers } from 'react-icons/fa';
import { SimpleCard } from '../../components/SimpleCard';
import { BaseTemplate } from '../../components/Templates/BaseLayout';
import { routes } from '../../utils/routes';

const SettingsPage = () => {
  return (
    <BaseTemplate title="Configurações" icon={FaCogs}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <SimpleCard
          title="Procedimentos"
          icon={FaFileAlt}
          href={routes.settingsProcedures}
        />
        <SimpleCard
          title="Usuários"
          icon={FaUsers}
          href={routes.settingsUsers}
        />
      </Grid>
    </BaseTemplate>
  );
};

export default function Settings() {
  return <SettingsPage />;
}
