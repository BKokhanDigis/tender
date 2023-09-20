import React, { useState } from 'react';
import { Input, InputNumber, Button, Form, Progress } from 'antd';
import { AntDesignTextInputField } from '../Inputs/inputs'
import { DeleteOutlined } from '@ant-design/icons';
import addBankIcon from '../../../../assets/images/add.png';
const BankList = () => {
  const [banks, setBanks] = useState([
    { name: '', percentage: 0 },
  ]);

  const addBank = () => {
    if (banks.length < 5) {
      saveBanksToLocalStorage(banks);
      const newBankList = [...banks, { name: '', percentage: 0 }];
      setBanks(newBankList);
    }
  };
  const saveBanksToLocalStorage = (banks) => {
    localStorage.setItem('banks', JSON.stringify(banks));
  };

  const removeBank = (index) => {
    const updatedBanks = banks.filter((_, i) => i !== index);
    saveBanksToLocalStorage(updatedBanks);
    setBanks(updatedBanks);
  };

  const handleBankNameChange = (index, value) => {
    const updatedBanks = banks.map((bank, i) =>
      i === index ? { ...bank, name: value } : bank
    );
    setBanks(updatedBanks);
    saveBanksToLocalStorage(updatedBanks);
  };

  const handleBankPercentageChange = (index, value) => {
    const updatedBanks = banks.map((bank, i) =>
      i === index ? { ...bank, percentage: value } : bank
    );
    setBanks(updatedBanks);
    saveBanksToLocalStorage(updatedBanks);
  };

  const getTotalPercentage = () =>
    banks.reduce((total, bank) => total + bank.percentage, 0);

  return (
    <div style={{ marginBottom: 20 }}>
      <Form >
        {banks.map((bank, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Item style={{ marginRight: '20px' }}
            >
              <AntDesignTextInputField
                label="Bank Name"
                placeholder="Enter Bank Name"
                InputComponent={Input}
                width={400}
                onChange={(e) => handleBankNameChange(index, e.target.value)}
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0, marginTop: 22, marginRight: '20px' }}>
              <InputNumber
                style={{ width: '200px' }}
                min={0}
                max={100}
                value={bank.percentage}
                onChange={(value) =>
                  handleBankPercentageChange(index, value)
                }
              />
            </Form.Item>
            <Progress
              percent={bank.percentage}
              status={
                getTotalPercentage() === 100 ? 'success' : 'active'
              }
              showInfo={false}
              style={{ width: 200, marginLeft: '10px', marginTop: '22px', marginRight: '20px' }}
            />
            <Button
              disabled={banks.length === 1}
              icon={<DeleteOutlined />}
              onClick={() => removeBank(index)}
              style={{ marginTop: 22 }}
            />
            {index === banks.length - 1 ? (
              <img
                src={addBankIcon}
                alt="Add Bank"
                onClick={addBank}
                style={{ cursor: 'pointer', marginLeft: '10px', marginTop: '22px' }}
              />
            ) : null}
          </div>
        ))}

      </Form>
    </div>
  );
};

export default BankList;
