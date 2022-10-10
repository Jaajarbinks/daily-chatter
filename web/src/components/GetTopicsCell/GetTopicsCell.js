import TopicCard from 'src/components/HomePageTopics'

export const QUERY = gql`
  query GetTopicsQuery {
    getTopics: topics {
      id
      title
      subscribedUser {
        id
        username
      }
      prompts {
        title
        body
        responses {
          id
          body
          User {
            username
            email
          }
          userId
          upvotes
          downvotes
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getTopics }) => {
  console.log(getTopics)
  return getTopics.map((topic) => <TopicCard key={topic.id} topic={topic} />)
}
