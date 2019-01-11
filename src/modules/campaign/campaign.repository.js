import { mainStory } from 'storyboard';
import CampaignModel from './campaign.model';
import {
  OrchidError,
  errorFormatter,
  TYPE_INVALID_PAYLOAD,
  TYPE_NOT_FOUND,
  TYPE_REPO_ERROR,
  MESSAGE_INVALID_PAYLOAD,
  MESSAGE_CONTENT_NOT_FOUND,
} from '../../helpers';
const TAG = 'App:Repository:Campaign';
const CampaignRepository = {};

/**
 * Get all campaigns
 */
CampaignRepository.findAll = async () => {
  return CampaignModel.find({ isDeleted: false })
    .populate('content')
    .populate('publishers');
};

CampaignRepository.findById = async campaignId => {
  try {
    const result = await CampaignModel.findOne({
      _id: campaignId,
      isDeleted: false,
    })
      .populate('content')
      .populate('publishers');
    if (result) {
      return result;
    } else {
      throw new OrchidError(TYPE_NOT_FOUND, MESSAGE_CONTENT_NOT_FOUND);
    }
  } catch (error) {
    throw new OrchidError(TYPE_REPO_ERROR, error);
  }
};

/**
 * Get all campaigns
 * @param {campaign} Campaign Object
 */
CampaignRepository.add = async campaign => {
  const { error } = CampaignModel.validateModel(campaign);
  if (error) {
    throw new OrchidError(TYPE_INVALID_PAYLOAD, errorFormatter(error.details));
  }
  return CampaignModel(campaign).save();
};

CampaignRepository.update = async (campaignId, campaign) => {
  // remove id field if exists
  delete campaign._id;

  // if there is nothing to update throw error
  if (Object.keys(campaign).length === 0) {
    throw new OrchidError(TYPE_INVALID_PAYLOAD, MESSAGE_INVALID_PAYLOAD);
  }

  // update the campaign
  const { error } = CampaignModel.validateModel(campaign);
  if (error) {
    throw new OrchidError(TYPE_INVALID_PAYLOAD, errorFormatter(error.details));
  }
  return CampaignModel.updateOne({ _id: campaignId }, campaign);
};

CampaignRepository.delete = async campaignId => {
  const c = await CampaignModel.findOne({ _id: campaignId }).select(
    '+isDeleted'
  );
  if (c.isDeleted) {
    return false;
  } else {
    // delete the campaign by setting isDeleted true
    return CampaignModel.updateOne({ _id: campaignId }, { isDeleted: true });
  }
};

export default CampaignRepository;
