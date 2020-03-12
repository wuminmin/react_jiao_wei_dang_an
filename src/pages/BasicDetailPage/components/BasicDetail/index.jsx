import React from 'react';
import { Box, Card, Table, Form } from '@alifd/next';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  basicInfo: {
    company: '张老师',
    code: '189xxxxxx',
    committee: '男',
    trade: '群众',
    aliasProject: '341003xxxxxxx',
  },
  projectMember: {
    icMemeber:
      '阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞，阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞',
    forensicReview:
      '阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞，阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞',
    financialReview:
      '阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞，阮小五，阮小二，阮小七，公孙胜，曹正，李立，樊瑞',
  },
  targetCompanys: new Array(10).fill({
    targetCompany: '蚂蚁证券投资有限公司',
    business: '金融证券代理',
    address: '1569 Cronin Ways Apt. 082',
    creator: '欧鹏',
  }),
};

const BasicDetail = props => {
  const { dataSource = DEFAULT_DATA } = props;
  return (
    <div>
      <Box spacing={20}>
        <Card free>
          <Card.Header title="基本信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Form labelAlign="top" responsive>
                <Form.Item colSpan={4} label="名称" required>
                  <span>{dataSource.basicInfo.company}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="手机号" required>
                  <span>{dataSource.basicInfo.code}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="性别" required>
                  <span>{dataSource.basicInfo.committee}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="政治面貌" required>
                  <span>{dataSource.basicInfo.trade}</span>
                </Form.Item>
                <Form.Item colSpan={4} label="身份证号码" required>
                  <span>{dataSource.basicInfo.aliasProject}</span>
                </Form.Item>
              </Form>
            </div>
          </Card.Content>
        </Card>
        {/* <Card free>
          <Card.Header title="工作信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Form labelAlign="top">
                <Form.Item label="IC成语" required>
                  <span>{dataSource.projectMember.icMemeber}</span>
                </Form.Item>
                <Form.Item label="法务评审" required>
                  <span>{dataSource.projectMember.forensicReview}</span>
                </Form.Item>
                <Form.Item label="财务评审" required>
                  <span>{dataSource.projectMember.financialReview}</span>
                </Form.Item>
              </Form>
            </div>
          </Card.Content>
        </Card> */}
        <Card free>
          <Card.Header title="工作信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Table
                dataSource={dataSource.targetCompanys}
                hasBorder={false}
                className={styles.Table}
              >
                <Table.Column title="部门" dataIndex="targetCompany" />
                <Table.Column title="岗位序列" dataIndex="business" />
                <Table.Column title="岗位" dataIndex="address" />
                <Table.Column title="岗位等级" dataIndex="creator" />
              </Table>
            </div>
          </Card.Content>
        </Card>

        <Card free>
          <Card.Header title="学历信息" />
          <Card.Divider />
          <Card.Content>
            <div className={styles.Content}>
              <Table
                dataSource={dataSource.targetCompanys}
                hasBorder={false}
                className={styles.Table}
              >
                <Table.Column title="入学日期" dataIndex="targetCompany" />
                <Table.Column title="毕业日期" dataIndex="business" />
                <Table.Column title="学校" dataIndex="address" />
                <Table.Column title="专业" dataIndex="creator" />
                <Table.Column title="学历" dataIndex="creator" />
                <Table.Column title="学位" dataIndex="creator" />
                <Table.Column title="学习方式" dataIndex="creator" />
              </Table>
            </div>
          </Card.Content>
        </Card>
      </Box>
    </div>
  );
};

export default BasicDetail;
