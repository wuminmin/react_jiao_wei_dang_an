import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import GroupForm from './components/GroupForm';

const { Cell } = ResponsiveGrid;

const FormGroup = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="录入信息"
        description="按分组录入教师信息"
        // breadcrumbs={[
        //   {
        //     name: '表单页面',
        //   },
        //   {
        //     name: '分组表单',
        //   },
        // ]}
      />
    </Cell>

    <Cell colSpan={12}>
      <GroupForm />
    </Cell>
  </ResponsiveGrid>
);

export default FormGroup;
