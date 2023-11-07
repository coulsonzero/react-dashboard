import React, { useState, createElement } from 'react'
import { flushSync } from 'react-dom'
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from 'antd'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons'
import moment from 'moment'
import { robot, perfil, author } from '@/assets/imgs'

const { TextArea } = Input

const CommentList = ({ comments }) => (
	<List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
	<>
		<Form.Item>
			<TextArea rows={4} onChange={onChange} value={value} />
		</Form.Item>
		<Form.Item>
			<Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
				Add Comment
			</Button>
		</Form.Item>
	</>
)

export default function CommentCard() {
	const [comments, setComments] = useState([])
	const [submitting, setSubmitting] = useState(false)
	const [value, setValue] = useState('')

    const datetimeBox = (
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
        </Tooltip>
    )

    const handleSubmit = () => {
        if (!value) return
        setSubmitting(true)
        flushSync(() => {
            setSubmitting(false)
            setValue('')
            setComments([
                ...comments,
                {
                    author: 'Han Solo',
                    avatar: perfil,
                    content: <p>{value}</p>,
                    // datetime: moment().fromNow(),
                    datetime: datetimeBox,

                },
            ])
        })
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

	return (
		<>
			{comments.length > 0 && <CommentList comments={comments} />}
			<Comment
                avatar={<Avatar src={author} alt="Han Solo" />}
                author={<a>John Smith</a>}
                content={<Editor
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    submitting={submitting}
                    value={value}
                />}
            />
		</>
	)
}
