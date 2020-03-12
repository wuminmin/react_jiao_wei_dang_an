import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicDetail from './components/BasicDetail';

const { Cell } = ResponsiveGrid;

const BasicDetailPage = () => (
  <ResponsiveGrid gap={20}>
    <Cell colSpan={12}>
      <PageHeader
        title="教师详情"
        // breadcrumbs={[
        //   {
        //     name: '详情页面',
        //   },
        //   {
        //     name: '基础详情',
        //   },
        // ]}
        description="教师详情"
      />
    </Cell>

    <Cell colSpan={12}>
      <BasicDetail />
    </Cell>
  </ResponsiveGrid>
);

export default BasicDetailPage;
