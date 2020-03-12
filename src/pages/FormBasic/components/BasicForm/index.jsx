import React, { useState } from 'react';
import { Input, Form, Box, Button, Card, DatePicker, Message, Radio, Upload } from '@alifd/next';
import styles from './index.module.scss';

const FormItem = Form.Item;
const formItemLayout = {
  colSpan: 12,
};
const DEFAULT_DATA = {
  type: 'private',
};

const DEFAULT_ON_SUBMIT = (values, errors) => {
  if (errors) {
    console.log('errors', errors);
    return;
  }

  console.log('values:', values);
  Message.success('提交成功');
};

const BasicForm = props => {
  const { dataSource = DEFAULT_DATA, onSubmit = DEFAULT_ON_SUBMIT, onCancel = () => {} } = props;
  const [postData, setValue] = useState(dataSource);

  const formChange = values => {
    setValue(values);
  };

  return (
    <Card free>
      <Card.Content>
        <Form
          className={styles.BasicForm}
          responsive
          fullWidth
          value={postData}
          labelAlign="top"
          onChange={formChange}
        >
          <FormItem {...formItemLayout} label="姓名：" required requiredMessage="必填">
            <Input placeholder="请输入姓名" name="name" />
          </FormItem>

          <FormItem {...formItemLayout} label="出生日期：" required requiredMessage="必填">
            <DatePicker name="date" />
          </FormItem>

          <FormItem {...formItemLayout} label="性别：">
            <Radio.Group name="type" aria-labelledby="authority of project">
              <Radio id="private" value="private">
                男
              </Radio>
              <Radio id="internal" value="internal">
                女
              </Radio>
            </Radio.Group>
          </FormItem>

          <FormItem {...formItemLayout} label="民族：" required requiredMessage="必填">
            <Input placeholder="请输入民族" name="category" />
          </FormItem>

          <FormItem {...formItemLayout} label="身份证：" required requiredMessage="必填">
            <Input placeholder="请输入身份证" name="idCrad" />
          </FormItem>

          <FormItem {...formItemLayout} label="籍贯：" required requiredMessage="必填">
            <Input placeholder="请输入籍贯" name="hometown" />
          </FormItem>

          <FormItem {...formItemLayout} label="政治面貌：" required requiredMessage="必填">
            <Input placeholder="请输入政治面貌" name="politicalStatus" />
          </FormItem>

          <FormItem {...formItemLayout} label="入党日期：" required requiredMessage="必填">
            <DatePicker name="date_of_joining_the_party" />
          </FormItem>

          <FormItem {...formItemLayout} label="参加工作日期：" required requiredMessage="必填">
            <DatePicker name="work_Date" />
          </FormItem>

          <FormItem {...formItemLayout} label="婚姻状况：">
            <Radio.Group name="marital_status" aria-labelledby="authority of project">
              <Radio id="private" value="unmarried">
                未婚
              </Radio>
              <Radio id="internal" value="married">
                已婚
              </Radio>
              <Radio id="internal" value="divorced">
                离异
              </Radio>
              <Radio id="internal" value="widowed">
                丧偶
              </Radio>
            </Radio.Group>
          </FormItem>

          <FormItem {...formItemLayout} label="出生地：" required requiredMessage="必填">
            <Input placeholder="请输入出生地" name="place_of_birth" />
          </FormItem>

          <FormItem {...formItemLayout} label="户口所在地：" required requiredMessage="必填">
            <Input placeholder="请输入户口所在地：" name="account_location" />
          </FormItem>

          <FormItem {...formItemLayout} label="办公电话：" required requiredMessage="必填">
            <Input placeholder="请输入办公电话" name="office_Phone" />
          </FormItem>

          <FormItem {...formItemLayout} label="手机号码：" required requiredMessage="必填">
            <Input placeholder="请输入手机号码" name="mobile_phone_number" />
          </FormItem>

          <FormItem {...formItemLayout} label="电子邮件：" required requiredMessage="必填">
            <Input placeholder="请输入电子邮件" name="email" />
          </FormItem>

          <FormItem {...formItemLayout} label="紧急联系人：" required requiredMessage="必填">
            <Input placeholder="请输入紧急联系人" name="emergency_contact" />
          </FormItem>

          <FormItem {...formItemLayout} label="紧急联系人电话：" required requiredMessage="必填">
            <Input placeholder="请输入紧急联系人电话" name="emergency_contact_phone" />
          </FormItem>


          <FormItem {...formItemLayout} label="部门：" required requiredMessage="必填">
            <Input placeholder="请输入部门" name="department" />
          </FormItem>

          <FormItem {...formItemLayout} label="岗位序列：" required requiredMessage="必填">
            <Input placeholder="请输入岗位序列" name="post_sequence" />
          </FormItem>

          <FormItem {...formItemLayout} label="岗位：" required requiredMessage="必填">
            <Input placeholder="请输入岗位" name="post" />
          </FormItem>

          <FormItem {...formItemLayout} label="岗位等级：" required requiredMessage="必填">
            <Input placeholder="请输入岗位等级" name="job_level" />
          </FormItem>

          <FormItem {...formItemLayout} label="职务" required requiredMessage="必填">
            <Input placeholder="请输入岗位职务" name="Position" />
          </FormItem>

          <FormItem {...formItemLayout} label="现职时间：" required requiredMessage="必填">
            <Input placeholder="请输入现职时间" name="Current_time" />
          </FormItem>

          <FormItem {...formItemLayout} label="任现职岗位等级时间：" required requiredMessage="必填">
            <Input placeholder="请输入" name="Incumbent_level_time" />
          </FormItem>

          <FormItem {...formItemLayout} label="入学日期：" required requiredMessage="必填">
            <DatePicker name="Admission_Date" />
          </FormItem>

          <FormItem {...formItemLayout} label="毕业日期：" required requiredMessage="必填">
            <DatePicker name="Graduation_date" />
          </FormItem>

          <FormItem {...formItemLayout} label="学校：" required requiredMessage="必填">
            <Input placeholder="请输入" name="school" />
          </FormItem>

          <FormItem {...formItemLayout} label="专业：" required requiredMessage="必填">
            <Input placeholder="请输入" name="profession" />
          </FormItem>

          <FormItem {...formItemLayout} label="学历：" required requiredMessage="必填">
            <Input placeholder="请输入" name="Education" />
          </FormItem>

          <FormItem {...formItemLayout} label="学位：" required requiredMessage="必填">
            <Input placeholder="请输入" name="Bachelor_of_Science" />
          </FormItem>

          <FormItem {...formItemLayout} label="学习方式：">
            <Radio.Group name="type" aria-labelledby="authority of project">
              <Radio id="private" value="Full-time">
                全日制
              </Radio>
              <Radio id="internal" value="Part-time">
                非全日制
              </Radio>
            </Radio.Group>
          </FormItem>


          <FormItem {...formItemLayout} label="上传封面：">
            <Upload shape="card" name="pic">
              上传图片
            </Upload>
          </FormItem>

          <FormItem {...formItemLayout} label="项目描述：">
            <Input.TextArea placeholder="请输入项目详细信息" name="desc" />
          </FormItem>

          <FormItem colSpan={12}>
            <Box spacing={8} direction="row">
              <Form.Submit type="primary" onClick={onSubmit} validate>
                提交
              </Form.Submit>
              <Button onClick={onCancel} type="secondary">
                取消
              </Button>
            </Box>
          </FormItem>
        </Form>
      </Card.Content>
    </Card>
  );
};

export default BasicForm;
