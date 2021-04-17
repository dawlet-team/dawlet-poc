# Things to Know about Deployment

## When bumping a version

1. create a new `release/{new version}` branch.
1. run `lerna version {new version} --no-push --conventional-commits`. This will bump versions written in `package.json` and also generates new CHANGELOG
1. create a pull request from `release/{new version}` to `master`.
1. copy and paste the newly added part of the generated CHANGELOG into the description of the PR.

1. If PR status checks pass, merge it.
1. After the PR merge, push the new version tag. This will kick the deploy action on github actions.
1. After the new version has successfully been deployed, create a new release on github and copy and paste the newly added part of the generated CHANGELOG into the release note.
