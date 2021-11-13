import {random} from "lodash";
import {
  Table, Thead, Th, Tbody, Tr, Td,
  Grid, GridItem,
} from "@chakra-ui/react";

import linearSearch from "features/linear-search";

const arraySizes = [10, 20, 200, 2000, 20000];

const randomNumberArrays = arraySizes.map(size => {
  return new Array(size).fill(null).map(() => random(-size, size, false));
});

const ComparisonTable = () => {
  const renderedRows = randomNumberArrays.map(array => {
    const foundEls = linearSearch(array, el => !(el % 5));
    const firstEl = foundEls[0];

    return (
      <Tr key={array.length}>
        <Th>{array.length}</Th>
        <Td>
          <Grid templateColumns='repeat(2, 1fr)'>
            <GridItem>Value: {firstEl.value}</GridItem>
            <GridItem>Index: {firstEl.index}</GridItem>
          </Grid>
        </Td>
        <Td>{firstEl.index + 1}</Td>
      </Tr>
    );
  });

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Number of elements</Th>
          <Th>Found element</Th>
          <Th>Comparison number</Th>
        </Tr>
      </Thead>
      <Tbody>
        {renderedRows}
      </Tbody>
    </Table>
  );
}

export default ComparisonTable;