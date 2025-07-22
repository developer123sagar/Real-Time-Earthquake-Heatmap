## React Query Practices

In this document, we describe best practices for using React Query in a React project, particularly the approach to naming and structuring custom hooks.

### Custom Query Hooks
When working with React Query, creating custom hooks to encapsulate API calls is a common practice. These custom hooks follow a naming structure based on the HTTP method being used (GET, POST, etc.) and the type of resource being fetched or modified.

#### Example: `useGetProjectsQuery`
The `useGetProjectsQuery` hook would be used to fetch the list of projects from an API endpoint.

```javascript
// api/projects/index.ts

import { useQuery } from 'react-query';
import { fetchProjects } from '@Services/projects';

export const useGetProjectsQuery = () => {
  return useQuery({
    queryKey: ['get-projects'],
    queryFn: async () => {
      const response = await fetchProjects();
      return response.data;
    },
  });
};
```

#### Example: `usePostUserMutation`
The `usePostUserMutation` hook would be used to submit a new user to the server.

```javascript
// api/users/index.ts

import { useMutation } from 'react-query';
import { postUser } from '@Services/users';

export const usePostUserMutation = () => {
  return useMutation(postUser);
};
```

### General Naming Guidelines for React Query Custom Hooks

#### Action Prefix (Get, Post, Update, Delete):
- Use the HTTP verb as a prefix in the hook’s name to indicate the type of operation.
- Examples: `useGetProjectsQuery`, `usePostProjectMutation`, `useUpdateProjectMutation`, `useDeleteProjectMutation`.

#### Name:
- Always use the services name for consistency. (eg. getProjects, updateUser, etc.)

#### Query and Mutation Suffix:
- For GET requests, append `Query` to the hook name.
- For POST, UPDATE, DELETE, or other mutation requests, append `Mutation` to the hook name.

#### Consistency:
- Consistency in naming conventions improves the readability and maintainability of your codebase. Follow the same pattern throughout your app.
