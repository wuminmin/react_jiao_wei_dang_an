import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicForm from './components/BasicForm';

const { Cell } = ResponsiveGrid;

const FormBasic = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="录入信息"
        description="教师个人信息录入"
        breadcrumbs={[
          {
            name: '表单页面',
          },
          {
            name: '单列基础表单',
          },
        ]}
      />
    </Cell>

    <Cell colSpan={12}>
      <BasicForm />
    </Cell>
  </ResponsiveGrid>
);

export default FormBasic;
