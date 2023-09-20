import Header from "../../Header";
import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { Divider } from 'antd';
import BankList from "./BankList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextInputField, SelectInputField, DateInputField } from "./Inputs/inputs";
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
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
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
            <Title>CreateNewDebt</Title>
            <SubTitle>Debt information</SubTitle>
            <Row>
              <TextInputField label="Facility Name" placeholder="Enter Facility Name" width="340px" name="facilityName" control={control} />
              <TextInputField label="Facility Description" placeholder="Enter Facility Description" width="340px" name="facilityDescription" control={control} />
            </Row>
            <Row>
              <TextInputField label="Facility Amount" placeholder="Enter Facility Amount" width="340px" name="facilityAmount" control={control} />
              <SelectInputField label="Currency" width="120px" options={currencies} name="currency" control={control} />
            </Row>
            <Grid>
              <DateInputField label="Signing/Issue Date" width="200px" onChange={onChange} name="issueDate" control={control} />
              <TextInputField label="Tenure" placeholder="Enter Tenure" width="200px" name="tenure" control={control} />
              <TextInputField label="Margin" placeholder="Enter Margin" width="200px" name="margin" control={control} />
              <TextInputField label="Interest Type" placeholder="Enter Interest Type" width="200px" name="interestType" control={control} />
            </Grid>
            <Grid>
              <TextInputField label="Benchmark" placeholder="Enter Benchmark" width="200px" name="benchmark" control={control} />
              <TextInputField label="Benchmark months" placeholder="Enter Benchmark months" width="200px" name="benchmarkMonths" control={control} />
              <TextInputField label="Term Holidays" placeholder="Enter Term Holidays" width="200px" name="termHolidays" control={control} />
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
              <TextInputField label="Commitment Fee" placeholder="Enter Commitment Fee" width="200px" name="commitmentFee" control={control} />
              <TextInputField label="Commitment Holidays" placeholder="Enter Commitment Holidays" width="200px" name="commitmentHolidays" control={control} />
              <TextInputField label="Arrangement Fee" placeholder="Enter Arrangement Fee" width="200px" name="ArrangementFee" control={control} />
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
              <TextInputField label="Allocation" placeholder="Enter Allocation" width="340px" marginRight="130px" name="allocation" control={control} />
              <TextInputField label="Project" placeholder="Enter Project" width="340px" name="project" control={control} />
            </Row>
            <Row>
              <TextInputField label="Maturity Description" placeholder="Enter Maturity Description" width="200px" marginRight="60px" name="maturityDescription" control={control} />
              <TextInputField label="Benchmark LIBOR" placeholder="Enter Benchmark LIBOR" width="200px" name="benchmarkLibor" control={control} />
            </Row>
            <Row>
              <TextInputField label="Availability Period" placeholder="Enter Availability Period" width="200px" name="availabilityPeriod" control={control} />
            </Row>
            <Divider style={{ marginTop: 45, marginBottom: 45, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
            <SubTitle>Lender-Wise Distribution Details</SubTitle>
            <Row>
              <button type="submit">Save</button >
            </Row>
          </form>
          <BankList />
        </Box>
      </ScreenWrapper>
    </>
  );
};



export default CreateNewDebt;