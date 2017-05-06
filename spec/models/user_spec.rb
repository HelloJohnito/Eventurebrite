require 'rails_helper'

RSpec.describe User, type: :model do

  let! (:user) { FactoryGirl.create(:user) }

  describe 'validations' do
    # before(:each) do
    #   User.create!(username: 'john', password: 'password')
    # end
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }

    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }
    it { should validate_length_of(:password).is_at_least(6) }
  end


  describe "associations" do
    # "it" refers to an instance of the User class here
    # because we have not explicitly specified a subject
    it { should have_many(:tickets)}
    it { should have_many(:bookmarks)}
  end

  describe 'model_methods' do
    describe '.find_by_credentials' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          new_user = User.find_by_credentials('john123', 'password')
          expect(new_user).to eq(user)
        end
      end

      context 'when given incorrect credentials' do
        it 'should return nil' do
          nil_user = User.find_by_credentials('hi', 'password')
          expect(nil_user).to eq(nil)
        end
      end
    end
  end

  describe 'instance_methods' do
    describe '#reset_session_token!' do
      it 'resets the session token' do
        session_token = user.session_token
        expect(user.reset_session_token!).not_to eq(session_token)
      end
    end
  end

end
