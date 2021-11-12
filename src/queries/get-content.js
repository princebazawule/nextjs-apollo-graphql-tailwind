import { gql } from "@apollo/client"
import MediaItemFragment from "./fragments/media-items"

export const ClientInfoWorkPosts = `
clients: clients {
  edges {
    node {
      clientId
      clients {
        clientName
        display
        fieldGroupName
        logo {
          ...MediaItemFragment
        }
      }
    }
  }
}
info: pages(where: {id: 22}) {
  edges {
    node {
      footerInfo {
        email
        facebook
        linkedin
        miniProfile
        skype
        twitter
      }
    }
  }
}
work: works {
  edges {
    node {
      workId
      works {
        client
        display
        fieldGroupName
        projectType
        gist
        logo {
          ...MediaItemFragment
        }
        projectShots {
          shots {
            ...MediaItemFragment
          }
        }
        splash {
          ...MediaItemFragment
        }
      }
    }
  }
}
`

export const GET_CONTENT = gql`

query GET_CONTENT {
  ${ClientInfoWorkPosts}
}

${MediaItemFragment}
`
