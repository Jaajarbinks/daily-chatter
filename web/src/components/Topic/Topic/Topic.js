import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TOPIC_MUTATION = gql`
  mutation DeleteTopicMutation($id: Int!) {
    deleteTopic(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Topic = ({ topic }) => {
  const [deleteTopic] = useMutation(DELETE_TOPIC_MUTATION, {
    onCompleted: () => {
      toast.success('Topic deleted')
      navigate(routes.topics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete topic ' + id + '?')) {
      deleteTopic({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Topic {topic.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{topic.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{topic.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{topic.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(topic.createdAt)}</td>
            </tr>
            {/* Topic/Post JSON Relation */}
            <tr>
              <th>JSON relations</th>
              <td>{jsonDisplay(topic, topic.title, topic.posts)}</td>
            </tr>
            {/* end JSON for Relation */}
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTopic({ id: topic.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(topic.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Topic
