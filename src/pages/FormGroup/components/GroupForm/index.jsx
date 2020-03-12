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
  assessment:[
    {
      id: '1',
      assessment_start_date:'2007-09-01',
      assessment_end_date:'2011-07-01',
      assessment_level:'优秀',
      assessment_department:'图书馆',
    },
    {
      id: '2',
      assessment_start_date:'2007-09-01',
      assessment_end_date:'2011-07-01',
      assessment_level:'优秀',
      assessment_department:'图书馆',
    },
    {
      id: '3',
      assessment_start_date:'2007-09-01',
      assessment_end_date:'2011-07-01',
      assessment_level:'优秀',
      assessment_department:'图书馆',
    },
  ],
  family:[
    {
      id: '1',
      title:'父亲',
      name:'某某',
      birth_day:'1977-01-01',
      political_status:'群众',
      employer:'清华大学',
      position:'管理员',
    },
    {
      id: '2',
      title:'父亲',
      name:'某某',
      birth_day:'1977-01-01',
      political_status:'群众',
      employer:'清华大学',
      position:'管理员',
    }, {
      id: '3',
      title:'父亲',
      name:'某某',
      birth_day:'1977-01-01',
      political_status:'群众',
      employer:'清华大学',
      position:'管理员',
    },
  ],
  specialized_technical_job:[
    {
      id: '1',
      technical_job_title:'工程师',
      acquisition_time:'1977-01-01',
    },
    {
      id: '2',
      technical_job_title:'工程师',
      acquisition_time:'1977-01-01',
    },
    {
      id: '3',
      technical_job_title:'工程师',
      acquisition_time:'1977-01-01',
    },
  ],
  vocational_qualification_name:[
    {
      id: '1',
      vocational_qualification_name:'工程师',
      acquisition_time:'1977-01-01',
      qualification_level:'中级',
      ratify_unit:'工信部',
    },
    {
      id: '2',
      vocational_qualification_name:'工程师',
      acquisition_time:'1977-01-01',
      qualification_level:'中级',
      ratify_unit:'工信部',
    },
    {
      id: '3',
      vocational_qualification_name:'工程师',
      acquisition_time:'1977-01-01',
      qualification_level:'中级',
      ratify_unit:'工信部',
    },
  ],
  reward_situation:[
    {
      id: '1',
      award_category:'三等奖',
      award_unit:'科技部',
      award_date:'1977-01-01',
      reward_reason:'发明创造',
      award_name:'创新杯',
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

  const changeRowData_assessment = (index, key, value) => {
    const assessment = [...dataSource.assessment];
    assessment[index][key] = value;
    setDataSouce({ ...dataSource, assessment });
  };

  const changeRowData_family = (index, key, value) => {
    const family = [...dataSource.family];
    family[index][key] = value;
    setDataSouce({ ...dataSource, family });
  };

  const changeRowData_specialized_technical_job = (index, key, value) => {
    const specialized_technical_job = [...dataSource.specialized_technical_job];
    specialized_technical_job[index][key] = value;
    setDataSouce({ ...dataSource, specialized_technical_job });
  };

  const changeRowData_vocational_qualification_name = (index, key, value) => {
    const vocational_qualification_name = [...dataSource.vocational_qualification_name];
    vocational_qualification_name[index][key] = value;
    setDataSouce({ ...dataSource, vocational_qualification_name });
  };

  const changeRowData_reward_situation = (index, key, value) => {
    const reward_situation = [...dataSource.reward_situation];
    reward_situation[index][key] = value;
    setDataSouce({ ...dataSource, reward_situation });
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

  const deleteRow_assessment = index => {
    const assessment = [...dataSource.assessment];
    if (!assessment[index].id) {
      assessment.splice(index, 1);
      setDataSouce({ ...dataSource, assessment });
      return;
    }
    Dialog.confirm({
      content: `确定要删除?`,
      onOk: () => {
        assessment.splice(index, 1);
        setDataSouce({ ...dataSource, assessment });
      },
    });
  };

  const deleteRow_family = index => {
    const family = [...dataSource.family];
    if (!family[index].id) {
      family.splice(index, 1);
      setDataSouce({ ...dataSource, family });
      return;
    }
    Dialog.confirm({
      content: `确定要删除?`,
      onOk: () => {
        family.splice(index, 1);
        setDataSouce({ ...dataSource, family });
      },
    });
  };

  const deleteRow_specialized_technical_job = index => {
    const specialized_technical_job = [...dataSource.specialized_technical_job];
    if (!specialized_technical_job[index].id) {
      specialized_technical_job.splice(index, 1);
      setDataSouce({ ...dataSource, specialized_technical_job });
      return;
    }
    Dialog.confirm({
      content: `确定要删除?`,
      onOk: () => {
        specialized_technical_job.splice(index, 1);
        setDataSouce({ ...dataSource, specialized_technical_job });
      },
    });
  };

  const deleteRow_vocational_qualification_name = index => {
    const vocational_qualification_name = [...dataSource.vocational_qualification_name];
    if (!vocational_qualification_name[index].id) {
      vocational_qualification_name.splice(index, 1);
      setDataSouce({ ...dataSource, vocational_qualification_name });
      return;
    }
    Dialog.confirm({
      content: `确定要删除?`,
      onOk: () => {
        vocational_qualification_name.splice(index, 1);
        setDataSouce({ ...dataSource, vocational_qualification_name });
      },
    });
  };

  const deleteRow_reward_situation = index => {
    const reward_situation = [...dataSource.reward_situation];
    if (!reward_situation[index].id) {
      reward_situation.splice(index, 1);
      setDataSouce({ ...dataSource, reward_situation });
      return;
    }
    Dialog.confirm({
      content: `确定要删除?`,
      onOk: () => {
        reward_situation.splice(index, 1);
        setDataSouce({ ...dataSource, reward_situation });
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
  const addRow_assessment = () => {
    setDataSouce({
      ...dataSource,
      assessment: [
        ...dataSource.assessment,
        {
          edited: true,
        },
      ],
    });
  };

  const addRow_family = () => {
    setDataSouce({
      ...dataSource,
      family: [
        ...dataSource.family,
        {
          edited: true,
        },
      ],
    });
  };

  const addRow_specialized_technical_job = () => {
    setDataSouce({
      ...dataSource,
      specialized_technical_job: [
        ...dataSource.specialized_technical_job,
        {
          edited: true,
        },
      ],
    });
  };

  const addRow_vocational_qualification_name = () => {
    setDataSouce({
      ...dataSource,
      vocational_qualification_name: [
        ...dataSource.vocational_qualification_name,
        {
          edited: true,
        },
      ],
    });
  };

  const addRow_reward_situation = () => {
    setDataSouce({
      ...dataSource,
      reward_situation: [
        ...dataSource.reward_situation,
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
      assessment:dataSource.assessment,
      family:dataSource.family,
      specialized_technical_job:dataSource.specialized_technical_job,
      vocational_qualification_name:dataSource.vocational_qualification_name,
      reward_situation:dataSource.reward_situation,
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

  const renderEditCell_assessment = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData_assessment(i, key, value)}
          value={v || ''}
        />
      );
    }
    return v;
  };

  const renderEditCell_family = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData_family(i, key, value)}
          value={v || ''}
        />
      );
    }
    return v;
  };

  const renderEditCell_specialized_technical_job = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData_specialized_technical_job(i, key, value)}
          value={v || ''}
        />
      );
    }
    return v;
  };

  const renderEditCell_vocational_qualification_name = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData_vocational_qualification_name(i, key, value)}
          value={v || ''}
        />
      );
    }
    return v;
  };

  const renderEditCell_reward_situation = (v, i, row, key) => {
    if (row.edited) {
      return (
        <Input
          style={{
            width: '100%',
          }}
          onChange={value => changeRowData_reward_situation(i, key, value)}
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
              <Select name="politicalStatus" id="relativeId" placeholder="请选择">
                <Select.Option value={1}>团员</Select.Option>
                <Select.Option value={2}>党员</Select.Option>
                <Select.Option value={3}>群众</Select.Option>
                <Select.Option value={4}>其他</Select.Option>
              </Select>
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
                <Select.Option value={3}>离异</Select.Option>
                <Select.Option value={4}>丧偶</Select.Option>
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
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>

      <Card free className={styles.Card}>
        <Card.Header title="考核信息" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow_assessment} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.assessment} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="考核开始日期"
              cell={(v, i, row) => renderEditCell_assessment(v, i, row, 'assessment_start_date')}
              dataIndex="assessment_start_date"
            />
            <Table.Column
              title="考核结束日期"
              cell={(v, i, row) => renderEditCell_assessment(v, i, row, 'assessment_end_date')}
              dataIndex="assessment_end_date"
            />
            <Table.Column
              title="考核等级"
              cell={(v, i, row) => renderEditCell_assessment(v, i, row, 'assessment_level')}
              dataIndex="assessment_level"
            />
            <Table.Column
              title="考核单位"
              cell={(v, i, row) => renderEditCell_assessment(v, i, row, 'assessment_department')}
              dataIndex="assessment_department"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData_assessment(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow_assessment(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }
                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData_assessment(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow_assessment(i)}>
                      删除
                    </Button>
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>

      <Card free className={styles.Card}>
        <Card.Header title="家庭信息" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow_family} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.family} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="称谓"
              cell={(v, i, row) => renderEditCell_family(v, i, row, 'title')}
              dataIndex="title"
            />
            <Table.Column
              title="姓名"
              cell={(v, i, row) => renderEditCell_family(v, i, row, 'name')}
              dataIndex="name"
            />
            <Table.Column
              title="生日"
              cell={(v, i, row) => renderEditCell_family(v, i, row, 'birth_day')}
              dataIndex="birth_day"
            />
            <Table.Column
              title="政治面貌"
              cell={(v, i, row) => renderEditCell_family(v, i, row, 'political_status')}
              dataIndex="political_status"
            />
             <Table.Column
              title="工作单位"
              cell={(v, i, row) => renderEditCell_family(v, i, row, 'employer')}
              dataIndex="employer"
            />
              <Table.Column
              title="职务"
              cell={(v, i, row) => renderEditCell_family(v, i, row, 'position')}
              dataIndex="position"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData_family(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow_family(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }
                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData_family(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow_family(i)}>
                      删除
                    </Button>
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>

      <Card free className={styles.Card}>
        <Card.Header title="专业技术职务" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow_specialized_technical_job} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.specialized_technical_job} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="技术职务名称"
              cell={(v, i, row) => renderEditCell_specialized_technical_job(v, i, row, 'technical_job_title')}
              dataIndex="technical_job_title"
            />
            <Table.Column
              title="取得时间"
              cell={(v, i, row) => renderEditCell_specialized_technical_job(v, i, row, 'acquisition_time')}
              dataIndex="acquisition_time"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData_specialized_technical_job(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow_specialized_technical_job(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }
                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData_specialized_technical_job(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow_specialized_technical_job(i)}>
                      删除
                    </Button>
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>

      <Card free className={styles.Card}>
        <Card.Header title="职业资格名称" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow_vocational_qualification_name} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.vocational_qualification_name} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="职业资格名称"
              cell={(v, i, row) => renderEditCell_vocational_qualification_name(v, i, row, 'vocational_qualification_name')}
              dataIndex="vocational_qualification_name"
            />
            <Table.Column
              title="取得时间"
              cell={(v, i, row) => renderEditCell_vocational_qualification_name(v, i, row, 'acquisition_time')}
              dataIndex="acquisition_time"
            />
            <Table.Column
              title="资格等级"
              cell={(v, i, row) => renderEditCell_vocational_qualification_name(v, i, row, 'qualification_level')}
              dataIndex="qualification_level"
            />
            <Table.Column
              title="批准单位"
              cell={(v, i, row) => renderEditCell_vocational_qualification_name(v, i, row, 'ratify_unit')}
              dataIndex="ratify_unit"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData_vocational_qualification_name(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow_vocational_qualification_name(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }
                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData_vocational_qualification_name(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow_vocational_qualification_name(i)}>
                      删除
                    </Button>
                  </div>
                );
              }}
            />
          </Table>
        </Card.Content>
      </Card>

      <Card free className={styles.Card}>
        <Card.Header title="奖励情况" />
        <Card.Divider />
        <Card.Content>
          <Box direction="row" margin={[0, 0, 16, 0]}>
            <Button onClick={addRow_reward_situation} className={styles.Button} type="primary">
              {' '}
              新增
            </Button>
          </Box>
          <Table dataSource={dataSource.reward_situation} hasBorder={false} className={styles.Table}>
            <Table.Column
              title="奖励类别"
              cell={(v, i, row) => renderEditCell_reward_situation(v, i, row, 'award_category')}
              dataIndex="award_category"
            />
            <Table.Column
              title="奖励机构"
              cell={(v, i, row) => renderEditCell_reward_situation(v, i, row, 'award_unit')}
              dataIndex="award_unit"
            />
            <Table.Column
              title="奖励时间"
              cell={(v, i, row) => renderEditCell_reward_situation(v, i, row, 'award_date')}
              dataIndex="award_date"
            />
            <Table.Column
              title="奖励事由"
              cell={(v, i, row) => renderEditCell_reward_situation(v, i, row, 'reward_reason')}
              dataIndex="reward_reason"
            />
             <Table.Column
              title="奖励名称"
              cell={(v, i, row) => renderEditCell_reward_situation(v, i, row, 'award_name')}
              dataIndex="award_name"
            />
            <Table.Column
              title="操作"
              cell={(v, i, row) => {
                if (row.edited) {
                  return (
                    <div>
                      <Button text type="primary" onClick={() => changeRowData_reward_situation(i, 'edited', false)}>
                        保存
                      </Button>
                      <Divider direction="ver" />
                      <Button text type="primary" onClick={() => deleteRow_reward_situation(i)}>
                        删除
                      </Button>
                    </div>
                  );
                }
                return (
                  <div>
                    <Button type="primary" onClick={() => changeRowData_reward_situation(i, 'edited', true)} text>
                      编辑
                    </Button>
                    <Divider direction="ver" />
                    <Button type="primary" text onClick={() => deleteRow_reward_situation(i)}>
                      删除
                    </Button>
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
