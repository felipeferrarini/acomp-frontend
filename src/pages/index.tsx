import { Box } from '@chakra-ui/react';
import { BaseTemplate } from '../components/Templates/BaseLayout';
import { withSSRAuth } from '../hocs/withSSRAuth';

export default function Dashboard() {
  return (
    <BaseTemplate>
      <Box />
    </BaseTemplate>
  );
}

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
