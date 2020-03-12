import React, { useState, useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Table,
  Box,
  Divider,
  MenuButton,
  Dialog,
  Field,
} from '@alifd/next';
import styles from './index.module.scss';

const DEFAULT_DATA = {
  basic: {},
  member: {},
  company: [
    {
      id: '1',
      name: '',
      business: '金融证券代理',
      address: '1569 Cronin Ways Apt. 082',
      creatorName: '欧鹏',

      enrollment_date:'2007-09-01',
      graduation_date:'2011-07-01',
      school:'清华大学',
      profession:'计算机科学与技术',
      education:'研究生',
      bachelor_of_Science:'硕士',
      learning_method:'学习方式',

    },
    {
      id: '2',
      name: '蚂蚁证券投资有限公司 B',
      business: '金融证券代理',
      address: '4016 Kautzer Route Suite 366',
      creatorName: '阮小五',

      enrollment_date:'2007-09-01',
      graduation_date:'2011-07-01',
      school:'清华大学',
      profession:'计算机科学与技术',
      education:'研究生',
      bachelor_of_Science:'硕士',
      learning_method:'学习方式',

    },
    {
      id: '3',
      name: '蚂蚁证券投资有限公司 C',
      business: '金融证券代理',
      address: '22 Haag Manor',
      creatorName: '阮小二',

      enrollment_date:'2007-09-01',
      graduation_date:'2011-07-01',
      school:'清华大学',
      profession:'计算机科学与技术',
      education:'研究生',
      bachelor_of_Science:'硕士',
      learning_method:'学习方式',
    },
    {
      id: '4',
      name: '蚂蚁证券投资有限公司 D',
      business: '金融证券代理',
      address: '1014 McLaughlin Unions',
      creatorName: '阮小七',

      enrollment_date:'2007-09-01',
      graduation_date:'2011-07-01',
      school:'清华大学',
      profession:'计算机科学与技术',
      education:'研究生',
      bachelor_of_Science:'硕士',
      learning_method:'学习方式',
    }
  ],
  resume:[
    {
      id: '1',
      resume_start_date:'2007-09-01',
      resume_end_date:'2011-07-01',
      employer:'北京大学',
      working_department:'图书馆',
      job:'管理员',
      position:'管理员',
    },
    {
      id: '2',
      resume_start_date:'2007-09-01',
      resume_end_date:'2011-07-01',
      employer:'北京大学',
      working_department:'图书馆',
      job:'管理员',
      position:'管理员',
    },
    {
      id: '3',
      resume_start_date:'2007-09-01',
      resume_end_date:'2011-07-01',
      employer:'北京大学',
      working_department:'图书馆',
      job:'管理员',
      position:'管理员',
    },

  ],
};

const GroupForm = props => {
  const {
    dataSource: defaultDataSource = DEFAULT_DATA,
    onSubmit = () => {},
    onCancel = () => {},
  } = props;
  const [dataSource, setDataSouce] = useState(defaultDataSource);
  const basicField = Field.useField({
    values: dataSource.basic,
  });
  const memberField = Field.useField({
    values: dataSource.member,
  });
  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react/no-find-dom-node
    const dom = findDOMNode(containerRef.current);
    const rect = (dom && dom.getBoundingClientRect()) || {};
    setLeft(rect.left);
    setRight(document.documentElement.offsetWidth - rect.left - rect.width);
  }, []);

  const changeRowData = (index, key, value) => {
    const company = [...dataSource.company];
    company[index][key] = value;
    setDataSouce({ ...dataSource, company });
  };

  const changeRowData_resume = (index, key, value) => {
    const resume = [...dataSource.resume];
    resume[index][key] = value;
    setDataSouce({ ...dataSource, resume });
  };

  const deleteRow = index => {
    const company = [...dataSource.company];
    if (!company[index].id) {
      company.splice(index, 1);
      setDataSouce({ ...dataSource, company });
      return;
    }
    Dialog.confirm({
      content: `确定要删除公司：${company[index].name} ?`,
      onOk: () => {
        company.splice(index, 1);
        setDataSouce({ ...dataSource, company });
      },
    });
  };

  const deleteRow_resume = index => {
    const resume = [...dataSource.resume];
    if (!resume[index].id) {
      resume.splice(index, 1);
      setDataSouce({ ...dataSource, resume });
      return;
    }
    Dialog.confirm({
      content: `确定要删除：${resume[index].employer} ?`,
      onOk: () => {
        resume.splice(index, 1);
        setDataSouce({ ...dataSource, resume });
      },
    });
  };

  const addRow = () => {
    setDataSouce({
      ...dataSource,
      company: [
        ...dataSource.company,
        {
          edited: true,
        },
      ],
    });
  };
  const addRow_resume = () => {
    setDataSouce({
      ...dataSource,
      resume: [
        ...dataSource.resume,
        {
          edited: true,
        },
      ],
    });
  };

  const submit = () => {
    onSubmit({
      basic: basicField.getValues(),
      member: memberField.getValues(),
      company: dataSource.company,
      resume:dataSource.resume,
    });
  };

  const renderEditCell = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData(i, key, value)}
          value={v || ''}
        />
      );
    }
    return v;
  };

  const renderEditCell_resume = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData_resume(i, key, value)}
          value={v || ''}
        />
      );
    }
    return v;
  };

  return (
    <div className={styles.GroupForm}>
      <Card ref={containerRef} free className={styles.Card}>
        <Card.Header title="人员基本信息" />
        <Card.Divider />
        <Card.Content>
          <Form field={basicField} responsive fullWidth labelAlign="top">
            <Form.Item colSpan={4} label="姓名" required>
              <Input name="name" placeholder="姓名" />
            </Form.Item>
            <Form.Item colSpan={4} label="性别" required>
              <Select name="gender" id="relativeId" placeholder="请选择">
                <Select.Option value={1}>男</Select.Option>
                <Select.Option value={2}>女</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item colSpan={4} label="出生日期" required>
              <Input name="birthdate" placeholder="请输入" />
            </Form.Item>
            <Form.Item colSpan={4} label="民族" required>
              <Input name="category" placeholder="请输入" />
            </Form.Item>
            <Form.Item colSpan={4} label="身份证" required>
              <Input name="idCrad" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="籍贯" required>
              <Input name="hometown" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="政治面貌" required>
              <Input name="politicalStatus" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="入党日期" required>
              <Input name="date_of_joining_the_party" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="参加工作日期" required>
              <Input name="work_Date" placeholder="请输入" />
            </Form.Item>
           
            <Form.Item colSpan={4} label="婚姻状况" required>
              <Select name="gender" id="relativeId" placeholder="请选择">
                <Select.Option value={1}>未婚</Select.Option>
                <Select.Option value={2}>已婚</Select.Option>
                <Select.Option value={2}>离异</Select.Option>
                <Select.Option value={2}>丧偶</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item colSpan={4} label="出生地" required>
              <Input name="place_of_birth" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="户口所在地" required>
              <Input name="account_location" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="办公电话" required>
              <Input name="office_Phone" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="机号码" required>
              <Input name="mobile_phone_number" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="电子邮件" required>
              <Input name="email" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="紧急联系人" required>
              <Input name="emergency_contact" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="紧急联系人电话" required>
              <Input name="emergency_contact_phone" placeholder="请输入" />
            </Form.Item>

          </Form>
        </Card.Content>
      </Card>
      <Card ref={containerRef} free className={styles.Card}>
        <Card.Header title="工作信息" />
        <Card.Divider />
        <Card.Content>
          <Form field={basicField} responsive fullWidth labelAlign="top">
            <Form.Item colSpan={4} label="部门" required>
              <Input name="department" placeholder="请输入" />
            </Form.Item>
            <Form.Item colSpan={4} label="岗位序列" required>
              <Input name="post_sequence" placeholder="请输入" />
            </Form.Item>
            <Form.Item colSpan={4} label="岗位" required>
              <Input name="post" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="岗位等级" required>
              <Input name="job_level" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="职务" required>
              <Input name="Position" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="现职时间" required>
              <Input name="Current_time" placeholder="请输入" />
            </Form.Item>

            <Form.Item colSpan={4} label="任现职岗位等级时间" required>
              <Input name="Incumbent_level_time" placeholder="请输入" />
            </Form.Item>

          </Form>
        </Card.Content>
      </Card>
    
      <Card free className={styles.Card}>
        <Card.Header title="学历信息" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.company} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="入学日期"
              cell={(v, i, row) => renderEditCell(v, i, row, 'enrollment_date')}
              dataIndex="enrollment_date"
            />
            <Table.Column
              title="毕业日期"
              cell={(v, i, row) => renderEditCell(v, i, row, 'graduation_date')}
              dataIndex="graduation_date"
            />
            <Table.Column
              title="学校"
              cell={(v, i, row) => renderEditCell(v, i, row, 'school')}
              dataIndex="school"
            />
            <Table.Column
              title="专业"
              cell={(v, i, row) => renderEditCell(v, i, row, 'profession')}
              dataIndex="profession"
            />
             <Table.Column
              title="学历"
              cell={(v, i, row) => renderEditCell(v, i, row, 'education')}
              dataIndex="education"
            />
              <Table.Column
              title="学位"
              cell={(v, i, row) => renderEditCell(v, i, row, 'bachelor_of_Science')}
              dataIndex="bachelor_of_Science"
            />
               <Table.Column
              title="学习方式"
              cell={(v, i, row) => renderEditCell(v, i, row, 'learning_method')}
              dataIndex="learning_method"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }

                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow(i)}>
                      删除
                    </Button>
                    {/* <Divider direction="ver" />
                    <MenuButton type="primary" popupTriggerType="hover" label="更多" text>
                      <MenuButton.Item>操作一</MenuButton.Item>
                      <MenuButton.Item>操作二</MenuButton.Item>
                      <MenuButton.Item>操作三</MenuButton.Item>
                    </MenuButton> */}
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>

      <Card free className={styles.Card}>
        <Card.Header title="工作履历" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow_resume} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.resume} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="履历开始日期"
              cell={(v, i, row) => renderEditCell_resume(v, i, row, 'resume_start_date')}
              dataIndex="resume_start_date"
            />
            <Table.Column
              title="履历结束日期"
              cell={(v, i, row) => renderEditCell_resume(v, i, row, 'resume_end_date')}
              dataIndex="resume_end_date"
            />
            <Table.Column
              title="工作单位"
              cell={(v, i, row) => renderEditCell_resume(v, i, row, 'employer')}
              dataIndex="employer"
            />
            <Table.Column
              title="所在部门"
              cell={(v, i, row) => renderEditCell_resume(v, i, row, 'working_department')}
              dataIndex="working_department"
            />
             <Table.Column
              title="岗位"
              cell={(v, i, row) => renderEditCell_resume(v, i, row, 'job')}
              dataIndex="job"
            />
              <Table.Column
              title="职务"
              cell={(v, i, row) => renderEditCell_resume(v, i, row, 'position')}
              dataIndex="position"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData_resume(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow_resume(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }
                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData_resume(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow_resume(i)}>
                      删除
                    </Button>
                    {/* <Divider direction="ver" />
                    <MenuButton type="primary" popupTriggerType="hover" label="更多" text>
                      <MenuButton.Item>操作一</MenuButton.Item>
                      <MenuButton.Item>操作二</MenuButton.Item>
                      <MenuButton.Item>操作三</MenuButton.Item>
                    </MenuButton> */}
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>




      <Box
        direction="row"
        spacing={16}
        style={{
          left,
          right,
        }}
        align="center"
        justify="center"
        className={styles.fixedButtons}
      >
        <Button className={styles.Button} onClick={submit} type="primary">
          提交
        </Button>
        <Button className={styles.Button} onClick={onCancel}>
          取消
        </Button>
      </Box>
    </div>
  );
};

export default GroupForm;
