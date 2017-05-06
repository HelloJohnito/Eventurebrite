require 'rails_helper'

#need to add user validation.

RSpec.describe Api::EventsController, type: :controller do

  describe 'GET #show' do

    let! (:event) { FactoryGirl.create(:event) }
    before(:each) do
      get :show, { id: event.id, format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }
  end

  describe "POST #create" do
    let! (:user) { FactoryGirl.create(:user) }
    # let! (:user) {User.create!(username: "john123", password: "password") }
    #user id is not working

    before do
      allow(controller).to receive(:current_user) { :user }
    end

    context "with invalid params" do
      before(:each) do
        post :create, event: { description: "invaild" }, format: :json
      end
      it { should respond_with(422) }
      it 'does not create the event' do
        expect(Event.exists?).to be false
      end
    end

    context "with valid params" do
      before(:each) do
        post :create, event: {title: "title", description: "valid", user_id: user.id, price: "$40", date: "1/1/1211", location: "sf", image_url: "cats.com"}, format: :json
      end
      it { should render_template(:show) }
      it { should respond_with(200) }
      it 'creates the event' do
        expect(Event.exists?).to be true
      end
    end
  end

  describe 'GET #index' do
    render_views
    # Without the above directive, response.body would only be an empty string.
    let!(:event_1) { FactoryGirl.create(:event)}
    let!(:event_2) { FactoryGirl.create(:event, title: "title1", description: "hello", user_id: 2, price: "$10", date: "3/3/3333", location: "la", image_url: "dogs.com") }

    context 'when there are no ranges' do
      before(:each) do
        get :index, { format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:index) }
      it 'renders all existing eventes' do
        rendered_response = JSON.parse(response.body)
        expect(rendered_response.length).to eq(2)
      end
    end
  end
end
