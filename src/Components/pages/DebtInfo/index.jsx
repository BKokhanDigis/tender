import React, { useEffect } from 'react';
import Header from '../../Header';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import moment from 'moment';
import { Progress, Divider, Table } from 'antd';
import { PieChart, Pie, Cell, Legend } from 'recharts'
import {
  ScreenWrapper,
  Title,
  SubTitle,
  Row,
  Grid
} from '../CreateNewDebt/styles'
import { Typography } from "@material-ui/core";
import { HeadTitle, HeadGrid, BlockTitle } from './styles';


const COLORS = ['#217AD1', '#1D6AB8', '#2D9CDB', '#6DAEEE', '#2688EB'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const useStyles = makeStyles((theme) => ({
  firstBlock: {
    backgroundColor: "white",
    borderRadius: 5,
    width: '80%',
    padding: theme.spacing(2),
    height: '315px',
    marginTop: 40,
    boxShadow: '0px 0px 4px 0px rgba(45, 156, 219, 0.10)',
    marginBottom: 90,
  },
  secondBlock: {
    backgroundColor: "white",
    borderRadius: 5,
    width: '80%',
    padding: theme.spacing(2),
    height: 'auto',
    marginTop: 40,
    boxShadow: '0px 0px 4px 0px rgba(45, 156, 219, 0.10)',
    marginBottom: 90,
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
    paddingRight: 23,
  },
  description: {
    fontFamily: 'DM Sans',
    fontWeight: '400',
    fontSize: 14,
    marginRight: 45,
  },
  fetDescription: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 16,
    color: '#475466'
  }
}));
const DebtInfo = () => {
  const data = JSON.parse(localStorage.getItem('formData'));
  const banks = JSON.parse(localStorage.getItem('banks'));
  const history = useHistory();

  const Item = ({ title, value, additionalText = '' }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Typography variant="subtitle1" className={classes.label}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {value + ' ' + additionalText}
        </Typography>
      </div>
    )
  }

  function formatDate(inputDate) {
    const date = moment(inputDate).format('DD-MMM-YYYY');
    return date;
  }

  const columns = [
    {
      title: 'Bank name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Percent',
      dataIndex: 'percent',
      key: 'percent',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const tableData = banks.map((bank) => ({
    key: bank.name,
    name: bank.name,
    percent: bank.percentage,
    amount: (bank.percentage / 100) * data.facilityAmount,
  }));

  function convertBanksToChartData(banks) {
    const chartData = banks.map((bank, index) => ({
      name: bank.name,
      value: +bank.percentage,
    }));
    return chartData;
  }

  const chartData = convertBanksToChartData(banks);
  const classes = useStyles();

  const formatCurrency = (number, currency) => {
    const currencySymbol = currency === 'EUR' ? '€' : '$';
    const millionValue = parseFloat(number) / 1000000;
    const formattedNumber = millionValue.toLocaleString(undefined, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return currencySymbol + formattedNumber.replace(currencySymbol, '') + 'm';
  };

//  useEffect(() => {
//   if (!data) {
//     history.goBack();
//   }
//  }, []);

  // function subtractFivePercent({ number }) {
  //   const numericValue = parseFloat(number);

  //   if (!isNaN(numericValue)) {
  //     const result = numericValue - (numericValue * 0.05);

  //     return (
  //       <p>{result}</p>
  //     );
  //   } else {
  //     return <p>{number}</p>;
  //   }
  // }

  function formatNumberToCurrency(number) {
    const numericValue = parseFloat(number);
    if (isNaN(numericValue)) {
      return "Incorrect number";
    }
    const formattedNumber = numericValue.toFixed(2);
    const parts = formattedNumber.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return `$${parts.join(".")}`;
  }

  return (
    <>
      <Header />
      <ScreenWrapper style={{ height: '100%', flexDirection: 'column', marginBottom: 0, justifyContent: 'flex-start' }}>
        <Box className={classes.firstBlock}>
          <HeadGrid>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 60, marginTop: 55 }}>
              <HeadTitle>{formatCurrency(data.facilityAmount, data.currency) + ' Term Loan Financing'}</HeadTitle>
              <div>
                <Row style={{ marginTop: 26 }}>
                  <Item title='Facility Description' value={data.facilityDescription} />
                  <Item title='Currency' value={data.currency} />
                </Row>
                <Row style={{ marginTop: 26 }}>
                  <Item title='Signing/Issue Date' value={formatDate(data.issueDate)} />
                  <Item title='Tenure' value={data.tenure} additionalText={'months'} />
                </Row>
                <Row style={{ marginTop: 26 }}>
                  <Item title='Allocation' value={data.allocation} />
                  <Item title='Project' value={data.project} />
                  <Item title='Maturity Description' value={data.maturityDescription} />
                </Row>
              </div>
            </div>
            <div>
              <Progress width={230} strokeWidth={10} type="circle" percent={95} format={(percent) =>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#98A1B2', fontFamily: 'DM Sans' }}>Facility Amount</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#2563EB', fontFamily: 'DM Sans' }}> {formatNumberToCurrency(data.facilityAmount - (data.facilityAmount * 0.05))}</span>
                  <span style={{ fontSize: '12px', fontWeight: 400, color: '#98A1B2', fontFamily: 'DM Sans' }}>(As per the utilized limit)</span>
                </div>
              } />
              <Row>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 50, marginTop: 20, alignItems: 'center' }}>
                  <Typography variant="subtitle1" className={classes.label}>
                    {'Facility Amount'}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.fetDescription}>
                    {formatNumberToCurrency(data.facilityAmount)}
                  </Typography>
                </div>
              </Row>
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#98A1B2', fontFamily: 'DM Sans' }}>(As per the facility agreement)</span>
            </div>
          </HeadGrid>
        </Box>
        <BlockTitle>More details</BlockTitle>
        <Box className={classes.secondBlock}>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Margin' value={data.margin} additionalText='%' />
            <Item title='Interest Type' value={data.interestType} />
            <Item title='Average Life (Years)' value={data.availabilityPeriod} />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Discounted Cashflow' value={'520.376'} />
            <Item title='Availability Period' value={data.availabilityPeriod} additionalText='years' />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Goal Seek IRR' value={'3.17%'} />
            <Item title='Effective Spread' value={'1.17%'} />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Benchmark' value={data.benchmark} />
            <Item title='Benchmark months' value={data.benchmarkMonths} additionalText='months' />
            <Item title='Term Holidays' value={data.termHolidays} additionalText='days' />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Repayment Start date' value={formatDate(data.repaymentStartDate)} additionalText='%' />
            <Item title='Repayment Terms' value={data.repaymentTerms} />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Debt Format' value={data.dabtFormat} additionalText='%' />
            <Item title='Format description' value={data.formatDescription} />
          </Grid>
          <Divider style={{ marginTop: 20, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
          <Grid>
            <SubTitle style={{ marginTop: 10 }}>Loan servicing</SubTitle>
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Commitment Fee' value={data.commitmentFee} additionalText='%' />
            <Item title='Commitment Holidays' value={data.commitmentHolidays} additionalText='days' />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Arrangement Fee' value={data.ArrangementFee} additionalText='%' />
            <Item title='Arrangement Fee Date' value={data.ArrangementFeeDate} />
          </Grid>
          <Divider style={{ marginTop: 20, backgroundColor: 'rgba(204, 210, 242, 0.60)' }} />
          <Grid>
            <SubTitle style={{ marginTop: 10 }}>One-time payments</SubTitle>
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Legal Fees' value={data.legalFees} />
            <Item title='Legal Fee Date' value={formatDate(data.legalFeeDate)} />
          </Grid>
          <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <Item title='Agency Fees' value={data.AgencyFees} />
            <Item title='Agency Fee Terms' value={data.commitmentHolidays} />
          </Grid>
        </Box>
        <BlockTitle>Lender-Wise Distribution Details</BlockTitle>
        <Box className={classes.secondBlock}>
          <Grid style={{ gridTemplateColumns: '2fr 1fr', marginTop: 50, marginLeft: 65 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <Table columns={columns} pagination={{ hideOnSinglePage: true }} dataSource={tableData} />
              <div style={{ fontSize: 16, fontFamily: 'DM Sans', fontWeight: 500, color: '#2563EB', marginBottom: 60, marginTop: 20, marginLeft: 370 }}>{data.facilityAmount}</div>
            </div>
            <PieChart width={400} height={200}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </Grid>
        </Box>
      </ScreenWrapper>
    </>
  );
};

export default DebtInfo;