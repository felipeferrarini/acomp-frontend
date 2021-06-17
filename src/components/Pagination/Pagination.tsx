import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { PaginationItem } from './components/PaginationItem';

interface IPagination {
  totalRegisters: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination(props: IPagination) {
  const { totalRegisters, currentPage = 1, onPageChange } = props;

  const registersPerPage = 10;

  const siblingsCount = 1;

  const lastPage = Math.floor(totalRegisters / registersPerPage);

  function generetePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter(page => page > 0);
  }

  const previousPages =
    currentPage > 1
      ? generetePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generetePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack direction="row" my="8" justify="center" align="center" spacing="6">
      <Box>
        <strong>{(currentPage - 1) * registersPerPage + 1}</strong> -{' '}
        <strong>
          {(currentPage - 1) * registersPerPage + registersPerPage}
        </strong>{' '}
        de <strong>{totalRegisters}</strong>
      </Box>
      <HStack spacing="2" mx="auto">
        {currentPage > 1 + siblingsCount && (
          <HStack align="flex-end">
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage - siblingsCount > 2 && (
              <Text color="gray.700" width="8" align="center">
                ...
              </Text>
            )}
          </HStack>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map(page => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <HStack align="flex-end">
            {currentPage + siblingsCount < lastPage - 1 && (
              <Text color="gray.700" width="8" align="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </HStack>
        )}
      </HStack>
    </Stack>
  );
}
