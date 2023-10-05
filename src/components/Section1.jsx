import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const Section1 = () => {
  return (
    <>
      <div className='backColor1'>
        <div className='scale'>
          <img src='/scale.png' alt='' />
        </div>
        <div className='container z-index'>
          <div className='history'>
            <h1>claims-market</h1>
          </div>
          <div className='trans'>
            <h2>Transaction History</h2>
            <p>
              Creditors have sold <span>$190,258,405.81</span> of claims through
              Claims Market in 295 transactions.
            </p>
          </div>

          <Table>
            <Thead>
              <Tr>
                <Th>Sold</Th>
                <Th>Listed</Th>
                <Th>Lead Debtor</Th>
                <Th>Minimum Claim Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>

              <Tr>
                <Td>Aug 11, 2023</Td>
                <Td>Aug 05, 2023</Td>
                <Td>BlockFi Inc.</Td>
                <Td>$73,053.90</Td>
              </Tr>
            </Tbody>
          </Table>

          <div className='btn-table'>
            <button>Show more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
