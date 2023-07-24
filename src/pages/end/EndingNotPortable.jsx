import React, { Fragment, useEffect } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import Title from '../../components/Title'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import useAppStateContext from '../../hooks/useAppStateContext'
import { useLocation } from 'react-router-dom'

export default function EndingNotPortable() {
  const { state, setState, setPath } = useAppStateContext()
  const { item1, item2, item3, item4, item5, item6 } = state;
  const location = useLocation()
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const complete = [item1, item2, item3, item4, item5, item6].filter((v) => v).length === 6;

  useEffect(() => {
    const timeout = setTimeout(() => {
      complete ? (
        setPath("/complete")
      ) : (
        setPath(location.pathname)
      )
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [complete])

  return (
    <Fragment>
      <Title label="Ending: Not Portable" />
      <div className='row-start-2 col-start-3 col-end-13 row-span-4'>
        <div className='flex flex-col flex-wrap text-white font-medium ml-6 mt-4'>
          <p className='my-2 mr-8'>The telephone number is not eligible to port-in.</p>
          <FormControl sx={{ marginX: 3, marginBottom: 3 }} component="fieldset" variant="standard">
            <FormLabel
              sx={{
                color: "#ffffff",
                fontSize: "1rem",
                textDecoration: "underline",
              }}
              component="legend"
            >
              Closing the Call:
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                sx={{ marginTop: 1 }}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    checked={item1}
                    onChange={handleChange}
                    name="item1"
                  />
                }
                label="Explain to the customer why we cannot port-in the requested telephone number."
              />
              <FormControlLabel
                sx={{ marginTop: 1 }}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    checked={item2}
                    onChange={handleChange}
                    name="item2"
                  />
                }
                label="Recap the details of the call with the customer."
              />
              <FormControlLabel
                sx={{ marginTop: 1 }}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    checked={item3}
                    onChange={handleChange}
                    name="item3"
                  />
                }
                label='Give closing statements (i.e., "My goal is to ensure your satisfaction. Have I resolved the reasons for your call today?").'
              />
              <FormControlLabel
                sx={{ marginTop: 1 }}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    checked={item4}
                    onChange={handleChange}
                    name="item4"
                  />
                }
                label="Complete the contact by selecting the appropriate call disposition."
              />
              <FormControlLabel
                sx={{ marginTop: 1 }}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    checked={item5}
                    onChange={handleChange}
                    name="item5"
                  />
                }
                label="Finishing entering your notes of the interaction in The HUB."
              />
              <FormControlLabel
                sx={{ marginTop: 1 }}
                control={
                  <Checkbox
                    icon={<CircleOutlinedIcon sx={{ color: "#ffffff" }} />}
                    checkedIcon={<CheckCircleIcon color="primary" />}
                    checked={item6}
                    onChange={handleChange}
                    name="item6"
                  />
                }
                label='Rebrand the company, and close the call (i.e., "Thank you for calling Frontier. Have a wonderful day! Goodbye!").'
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </Fragment>
  )
}