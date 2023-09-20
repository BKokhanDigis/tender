import Header from "../../Header";
import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Divider, Button } from 'antd';
import BankList from "./BankList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextInputField, SelectInputField, DateInputField, NumberInputField } from "./Inputs/inputs";
import {
  ScreenWrapper,
  Title,
  SubTitle,
  Row,
  Grid
} from './styles'

const useStyles = makeStyles((theme) => ({
  content: {
    width: '60%',
    padding: theme.spacing(2),
    height: '100%',
    marginTop: 40,
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  textField: {
    backgroundColor: "white",
    marginLeft: 15,
  },
  label: {
    fontFamily: 'DM Sans',
    color: "#98A1B2",
    fontWeight: '700',
    fontSize: 14,
  },
}));

const currencies = [
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'EUR',
    label: 'EUR',
  },
  {
    value: 'AED',
    label: 'AED',
  },

];



const CreateNewDebt = () => {
  const history = useHistory();
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify(data));
    history.push('/debtInfo');
  };

  const onChange = (date, dateString) => {

  };
  return (
    <>
      <Header />
      <ScreenWrapper >
        <Box className={classes.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Title>Create New Debt</Title>
            <SubTitle>Debt information</SubTitle>
            <Row>
              <div style={{ marginRight: 115 }}>
                <TextInputField label="Facility Name" placeholder="Enter Facility Name" width="340px" name="facilityName" control={control} />
              </div>
              <TextInputField label="Facility Description" placeholder="Enter Facility Description" width="340px" name="facilityDescription" control={control} />
            </Row>
            <Row>
              <div style={{ marginRight: 47 }}>
                <NumberInputField label="Facility Amount" placeholder="Enter Amount" width="340px" name="facilityAmount" control={control} />
              </div>
              <SelectInputField label="Currency" width="120px" options={currencies} name="currency" control={control} />
            </Row>
            <Grid>
              <DateInputField label="Signing/Issue Date" width="200px" onChange={onChange} name="issueDate" control={control} />
              <NumberInputField label="Tenure" placeholder="Enter Tenure" width="200px" name="tenure" control={control} descr='month' />
              <NumberInputField label="Margin" placeholder="Enter Margin" width="200px" name="margin" control={control} descr='%' />
              <TextInputField label="Interest Type" placeholder="Enter Interest Type" width="200px" name="interestType" control={control} />
            </Grid>
            <Grid>
              <TextInputField label="Benchmark" placeholder="Enter Benchmark" width="200px" name="benchmark" control={control} />
              <NumberInputField label="Benchmark months" placeholder="Enter Benchmark " width="200px" name="benchmarkMonths" descr='month' control={control} />
              <NumberInputField label="Term Holidays" placeholder="Enter Term Holidays" width="200px" name="termHolidays" descr='days' control={control} />
            </Grid>
            <Grid>
              <DateInputField label="Repayment Start date" width="200px" onChange={onChange} name="repaymentStartDate" control={control} />
              <TextInputField label="Repayment Terms" placeholder="Enter Repayment Terms" width="200px" name="repaymentTerms" control={control} />
              <TextInputField label="Debt Format" placeholder="Enter Debt Format" width="200px" name="dabtFormat" control={control} />
              <TextInputField label="Format description" placeholder="Enter Format description" width="200px" name="formatDescription" control={control} />
            </Grid>
            <Divider style={{ marginTop: 45, marginBottom: 45, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
            <SubTitle>Loan servicing</SubTitle>
            <Grid>
              <NumberInputField label="Commitment Fee" placeholder="Enter Commitment Fee" width="200px" name="commitmentFee" control={control} descr="%" />
              <NumberInputField label="Commitment Holidays" placeholder="Enter days number" width="200px" name="commitmentHolidays" descr="days" control={control} />
              <NumberInputField label="Arrangement Fee" placeholder="Enter Arrangement Fee" width="200px" name="ArrangementFee" control={control} descr="%" />
              <DateInputField label="Arrangement Fee Date" width="200px" onChange={onChange} name="ArrangementFeeDate" control={control} />
            </Grid>
            <Divider style={{ marginTop: 45, marginBottom: 45, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
            <SubTitle>One-time payments</SubTitle>
            <Grid>
              <TextInputField label="Legal Fees" placeholder="Enter Legal Fees" width="200px" name="legalFees" control={control} />
              <DateInputField label="Legal Fee Date" width="200px" onChange={onChange} name="legalFeeDate" control={control} />
              <TextInputField label="Agency Fees" placeholder="Enter Agency Fees" width="200px" name="AgencyFees" control={control} />
              <TextInputField label="Fee Terms" placeholder="Enter Fee Terms" width="200px" name="feeTerms" control={control} />
            </Grid>
            <Divider style={{ marginTop: 45, marginBottom: 45, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
            <SubTitle>Additional Information</SubTitle>
            <Row>
              <div style={{ marginRight: 110 }}>
                <TextInputField label="Allocation" placeholder="Enter Allocation" width="340px" marginRight="130px" name="allocation" control={control} />
              </div>
              <TextInputField label="Project" placeholder="Enter Project" width="340px" name="project" control={control} />
            </Row>
            <Row>
              <div style={{ marginRight: 55 }}>
                <TextInputField label="Maturity Description" placeholder="Enter Description" width="200px" marginRight="60px" name="maturityDescription" control={control} />
              </div>
              <NumberInputField label="Benchmark LIBOR" placeholder="Enter LIBOR" width="200px" name="benchmarkLibor" control={control} descr="%" />
            </Row>
            <Row>
              <NumberInputField label="Availability Period" placeholder="Enter Period" width="200px" name="availabilityPeriod" control={control} descr="years" />
            </Row>
            <Divider style={{ marginTop: 45, marginBottom: 45, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
            <SubTitle>Lender-Wise Distribution Details</SubTitle>
            <Row>
            </Row>
            <BankList />
            <Row style={{ marginBottom: 50, justifyContent: 'end' }}>
              <button style={{
                background: '#2563EB',
                borderRadius: 4,
                border: 0,
                color: 'white',
                height: 40,
                padding: '0 30px',
              }} type="submit">Save</button >
            </Row>
          </form>

        </Box>
      </ScreenWrapper >
    </>
  );
};



export default CreateNewDebt;