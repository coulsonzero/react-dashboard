import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styled from 'styled-components'

/**
 * 表单的使用：
 * const [form] = Form.useForm()
 * <Form form={form}>
 *  <Form.Item></Form.Item>
 * </Form>
 *
 * API:
 * form.submit()
 * form.resetFields()
 * form.setFieldsValue(obj)
 * form.getFieldValue('users')
 * form.validateFields()
 */

export default function Login() {
    const [form] = Form.useForm()

	const onFinish = (values) => {
        message.success('Submit success!')
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo) => {
        message.error('Submit failed!')
		console.log('Failed:', errorInfo)
	}

    const onSubmit = (values) => {
        console.log(window.localStorage)
        document.cookie = 'name: john; email: john@gmail.com'
        console.log(document.cookie.split(";"))
        form.submit(values)
    }

    const onReset = () => {
        form.resetFields()
    }

    const onFill = () => {
        form.setFieldsValue({
            username: 'john',
            password: '123456',
            confirm: '123456'
        })
    }

	return (
		<LoginStyle>
			<div></div>
			<Form
				name="basic"
				labelCol={{
					span: -8,
				}}
				wrapperCol={{
					span: 16,
				}}
				initialValues={{
					remember: true,
				}}
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off">
				<Form.Item
					label="Username"
					name="username"
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" allowClear />
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
					<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" allowClear />
				</Form.Item>

				<Form.Item
					name="confirm"
					label="Confirm Password"
					dependencies={['password']}
					hasFeedback
					rules={[
						{
							required: true,
							message: 'Please confirm your password!',
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve()
								}
								return Promise.reject(new Error('The two passwords that you entered do not match!'))
							},
						}),
					]}>
					{/* <Input.Password /> */}
					<Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" allowClear />
				</Form.Item>

				<Form.Item>
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					{/* <Button type="primary" htmlType="submit"> */}
					<Button type="primary" onClick={onSubmit}>
						Submit
					</Button>
					<Button htmlType="button" onClick={onReset}>
						Reset
					</Button>
					<Button type="link" htmlType="button" onClick={onFill}>
						Fill form
					</Button>
					Or <a href="">register now!</a>
				</Form.Item>
			</Form>
		</LoginStyle>
	)
}

const LoginStyle = styled.div`
	width: 60%;
	margin: 0 auto;
`
