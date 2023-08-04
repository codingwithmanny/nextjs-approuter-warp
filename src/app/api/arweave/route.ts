// Imports
// ========================================================
import { NextResponse, type NextRequest } from "next/server";
import { WarpFactory, LoggerFactory } from "warp-contracts";

// Functions
// ========================================================
/**
 * List
 * @param request
 * @returns
 */
export const GET = async (_request: NextRequest) => {
  LoggerFactory.INST.logLevel("error");
  const warp = WarpFactory.forMainnet();
  const contract = warp.contract("789i3rhsiqxE_SziYqYl6mCLIyrRsvTXKgfTunZbOhc");
  const state = await contract.readState();
  console.log({ state });

  // Return
  return NextResponse.json(
    {
      data: state,
    },
    {
      status: 200,
    }
  );
};
