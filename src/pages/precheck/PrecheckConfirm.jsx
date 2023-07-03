import React from 'react'
import useAppStateContext from '../../hooks/useAppStateContext'
import Grid, { Body, Title } from '../../components/Grid'

export default function PrecheckConfirm() {
  const { value, setValue } = useAppStateContext()
  setValue('/start');
  console.log(value);

  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(13, 1fr)',
        gridTemplateRows: 'repeat(8, 0.5fr)'
      }}
    >
      <Title
        sx={{
          gridColumn: '2 / 14',
          gridRow: '1 / 3',
          alignSelf: 'start',
          fontSize: '3.5rem',
        }}
      >
        <span className='text-midnight-express py-0'>
          Pre-Check Complete
        </span>
        <div className='flex-auto mr-12 -mt-4 py-0 border-t-4 transition duration-500 ease-in-out border-torch-red' />
        <div className='flex-auto mr-36 mt-2 border-t-4 transition duration-500 ease-in-out border-midnight-express' />
      </Title>
      <Body
        sx={{
          gridColumn: '2 / 11',
          gridRow: '3 / 4',
          alignSelf: 'flex-end',
          fontWeight: 'medium',
          textAlign: 'justify',
        }}
      > 
        Everything looks good!
      </Body>
      <Body
        sx={{
          gridColumn: '2 / 11',
          gridRow: '4 / 7',
          alignSelf: 'center',
          fontWeight: 'medium',
          textAlign: 'justify',
        }}
      > 
        Now that you've pre-checked the portability of the customer's telephone number, use the process outlined in the F[ONE] article <a href='https://kb.ftr.com/Pages/PI-WT---Port-In---Order-Entry.aspx' target='_blank' rel='noopener noreferrer'>PI/WT - Port In Order Entry</a> to complete the order.
      </Body>
    </Grid>
  )
}