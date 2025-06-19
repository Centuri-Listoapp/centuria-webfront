import { gql } from "graphql-request";
import { graphQLClient } from "./graphql-client";
import { CandidateData } from "../models/candidate";
import { CandidateVotingCenterData } from "../models/votingCenter";

class GeneralService {
  async getCandidate(id: string) {
    const query = gql`
      query Candidate($id: ObjectID!) {
        candidate(id: $id) {
          activitiesCount
          networkMembersCount
          promotionalImageUrl
          promotionalMessage
          fullName
          contact {
            phone
            web
            whatsapp
          }
          id
          locationLinks {
            url
            address {
              city
              country
              state
            }
          }
        }
      }
    `;
    try {
      const data = await graphQLClient.request<CandidateData>(query, { id });
      console.log("getCandidate.res:", data);
      return data;
    } catch (error) {
      console.log("getCandidate.err:", error);
      throw error;
    }
  }

  async getCandidateVotingCenters(candidateId: string) {
    const query = gql`
      query CandidateVotingCenters($candidateId: ObjectID!) {
        candidateVotingCenters(candidateId: $candidateId) {
          contactUrl
          id
          name
          networkGoalCount
          address {
            city
            state
          }
        }
      }
    `;
    try {
      const data = await graphQLClient.request<CandidateVotingCenterData>(
        query,
        { candidateId }
      );
      console.log("getCandidateVotingCenters.res:", data);
      return data;
    } catch (error) {
      console.log("getCandidateVotingCenters.err:", error);
      throw error;
    }
  }
}

export default new GeneralService();
