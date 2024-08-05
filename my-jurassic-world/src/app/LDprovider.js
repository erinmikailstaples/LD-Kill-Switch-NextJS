'use client'

import { withLDProvider } from 'launchdarkly-react-client-sdk';

function LDProvider({ children }) {
  return children;
}

export default withLDProvider({
  clientSideID: 'LD_CLIENT_SIDE_SDK',
})(LDProvider);
