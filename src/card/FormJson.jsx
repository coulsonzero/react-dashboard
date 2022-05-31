import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const CustomizedForm = ({ onChange, fields }) => (
	<Form
		name="global_state"
		layout="inline"
		fields={fields}
		onFieldsChange={(_, allFields) => {
			onChange(allFields)
		}}>
		<Form.Item
			name="username"
			label="Username"
			rules={[
				{
					required: true,
					message: 'Username is required!',
				},
			]}>
			<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
		</Form.Item>
		<Form.Item
			label="Password"
			name="password"
			hasFeedback
			rules={[
				{
					required: true,
					message: 'Please input your password!',
				},
				{
					type: 'string',
					min: 6,
					warningOnly: true,
				},
			]}>
			<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
		</Form.Item>
	</Form>
)

export default function FormJson() {
	const [fields, setFields] = useState([
		{
			name: ['username'],
			value: 'Ant Design',
		},
	])
	return (
		<>
			<CustomizedForm
				fields={fields}
				onChange={(newFields) => {
					setFields(newFields)
				}}
			/>
			<pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
		</>
	)
}


