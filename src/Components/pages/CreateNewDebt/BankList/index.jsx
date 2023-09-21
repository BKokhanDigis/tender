import React, { useState, useEffect } from 'react';
import { Input, InputNumber, Button, Form, Progress, message } from 'antd';
import { AntDesignTextInputField } from '../Inputs/inputs'
import { DeleteOutlined } from '@ant-design/icons';
import addBankIcon from '../../../../assets/images/Add.svg';
import addBankDisabledIcon from '../../../../assets/images/Add_disabled.svg';
const BankList = ({ banks, setBanks }) => {



  const removeBank = (index) => {
    const updatedBanks = banks.filter((_, i) => i !== index);
    setBanks(updatedBanks);
  };

  const handleBankNameChange = (index, value) => {
    const updatedBanks = banks.map((bank, i) =>
      i === index ? { ...bank, name: value } : bank
    );
    setBanks(updatedBanks);
  };

  const handleBankPercentageChange = (index, value) => {
      const updatedBanks = banks.map((bank, i) =>
        i === index ? { ...bank, percentage: value } : bank
      );
      setBanks(updatedBanks);
    
  };

  const getTotalPercentage = () =>
    banks.reduce((total, bank) => total + bank.percentage, 0);

  const addBank = () => {
    if (banks.length < 5 ) {
      const newBankList = [...banks, { name: '', percentage: 0 }];
      setBanks(newBankList);
    }
  };


  return (
    <div style={{ marginBottom: 20 }}>
      <Form >
        {banks.map((bank, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Item style={{ marginRight: '20px' }}
            >
              <AntDesignTextInputField
                // disabled={index !== banks.length - 1}
                label="Bank Name"
                placeholder="Enter Bank Name"
                InputComponent={Input}
                width={400}
                onChange={(e) => handleBankNameChange(index, e.target.value)}
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0, marginTop: 22, marginRight: '20px' }}>
              <InputNumber
                // disabled={index !== banks.length - 1}
                style={{ width: '200px' }}
                min={0}
                max={100}
                step={0.01}
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
