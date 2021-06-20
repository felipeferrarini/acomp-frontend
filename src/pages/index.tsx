import { Grid } from '@chakra-ui/react';
import { FaUserFriends, FaUserMd, FaCogs } from 'react-icons/fa';
import { SimpleCard } from '../components/SimpleCard';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { withSSRAuth } from '../hocs/withSSRAuth';
import { routes } from '../utils/routes';

export default function Dashboard() {
  return (
    <BaseTemplate>
      <Grid mt="6" templateColumns="repeat(2, 1fr)" gap={6} pb="6">
        <SimpleCard
          title="Pacientes"
          icon={FaUserFriends}
          href={routes.patients}
        />
        <SimpleCard title="Médicos" icon={FaUserMd} href={routes.doctors} />
        <SimpleCard
          title="Configurações"
          icon={FaCogs}
          href={routes.settings}
        />
      </Grid>
    </BaseTemplate>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
