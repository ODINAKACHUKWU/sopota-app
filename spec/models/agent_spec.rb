require 'rails_helper'

RSpec.describe Agent, type: :model do
  let(:user) {
    User.create(email: "jane@doe.com", password: "pw1234")
  }

  subject { described_class.new(department: "IT",
    user_id: user.id) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a department" do
      subject.department = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a user id" do
      subject.user_id = nil
      expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:user) }
    it { should have_many(:tickets) }
  end
end
